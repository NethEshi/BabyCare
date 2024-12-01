from flask import Flask, request, jsonify
import numpy as np
from tensorflow.keras.models import load_model
from sklearn.preprocessing import MinMaxScaler
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the trained model
model = load_model('baby_weight_predictor.keras')

# Initialize the scaler
scaler = MinMaxScaler()

# Define weight thresholds in kilograms
weight_thresholds = {
    0: [2.5, 3.0, 4.0, 4.5],
    2: [3.8, 4.8, 5.8, 6.8],
    4: [5.0, 6.0, 7.5, 8.5],
    6: [5.5, 6.8, 8.5, 9.5],
    8: [6.0, 7.4, 9.0, 10.0],
    10: [6.5, 7.9, 9.5, 10.5],
    12: [6.8, 8.2, 10.0, 11.0],
    14: [7.0, 8.4, 10.5, 11.5],
    16: [7.2, 8.6, 11.0, 12.0],
    18: [7.4, 8.8, 11.5, 12.5],
    24: [8.0, 9.4, 12.0, 13.0],
    30: [8.5, 10.0, 13.0, 14.0],
    36: [9.0, 10.6, 14.0, 15.0],
    42: [9.5, 11.0, 15.0, 16.0],
    48: [10.0, 11.4, 16.0, 17.0],
    54: [10.5, 11.8, 17.0, 18.0],
    60: [11.0, 12.2, 18.0, 19.0]
}

def classify_weight(age, weight_grams):
    # Convert weight from grams to kilograms
    weight_kg = weight_grams / 1000.0
    
    # Find the closest upper age value
    if age not in weight_thresholds:
        closest_age = min([key for key in weight_thresholds if key >= age], default=max(weight_thresholds.keys()))
    else:
        closest_age = age
    
    thresholds = weight_thresholds.get(closest_age, None)
    
    if not thresholds:
        return "Age not supported"
    
    if weight_kg < thresholds[0]:
        return "Severely Underweight"
    elif weight_kg < thresholds[1]:
        return "Underweight"
    elif weight_kg < thresholds[2]:
        return "Normal Weight"
    elif weight_kg < thresholds[3]:
        return "Overweight"
    else:
        return "Obese"

@app.route('/')
def home():
    return "Welcome to the BabyCare API!"

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    weights = data.get('weights', [])
    age = data.get('age', None)
    
    if not weights or not isinstance(weights, list) or len(weights) < 12 or age is None:
        return jsonify({"error": "Invalid input data"}), 400
    
    # Preprocess the input data
    weights = np.array(weights).reshape(-1, 1)
    weights = scaler.fit_transform(weights).reshape(1, len(weights), 1)
    
    # Make prediction
    next_month_weight_scaled = model.predict(weights)
    next_month_weight = scaler.inverse_transform(next_month_weight_scaled)[0][0]
    
    # Convert to standard Python float
    next_month_weight = float(next_month_weight)
    
    # Classify weight
    condition = classify_weight(age, next_month_weight)
    
    return jsonify({"next_month_weight": next_month_weight, "condition": condition})

if __name__ == '__main__':
    app.run(debug=True, port=4600)
import numpy as np
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

# Load the dataset (assuming 'baby_weight_dataset.csv' was created earlier)
df = pd.read_csv('baby_weight_dataset.csv')

# Convert weights to grams
weight_columns = [col for col in df.columns if col.startswith('Weight_Month')]
df[weight_columns] = df[weight_columns] * 1000  # Convert kg to grams

# Prepare sequences and targets
sequence_length = 12  # Use past 12 months to predict the 13th month
X, y = [], []

for _, row in df.iterrows():
    weights = row[weight_columns].values
    for i in range(len(weights) - sequence_length):
        X.append(weights[i:i + sequence_length])
        y.append(weights[i + sequence_length])

X = np.array(X)
y = np.array(y)

# Normalize data
scaler = MinMaxScaler()
X = scaler.fit_transform(X.reshape(-1, 1)).reshape(X.shape)
y = scaler.transform(y.reshape(-1, 1))

# Split into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Reshape X for LSTM (samples, time_steps, features)
X_train = X_train.reshape(X_train.shape[0], X_train.shape[1], 1)
X_test = X_test.reshape(X_test.shape[0], X_test.shape[1], 1)

# Build the LSTM model
model = Sequential([
    LSTM(50, activation='relu', input_shape=(X_train.shape[1], 1)),
    Dense(1)  # Predict one weight value
])

model.compile(optimizer='adam', loss='mse')
model.summary()

# Train the model
model.fit(X_train, y_train, epochs=100, batch_size=32, validation_data=(X_test, y_test))
# Save the trained model
model.save('baby_weight_predictor.keras')
# Evaluate the model
train_loss = model.evaluate(X_train, y_train, verbose=0)
test_loss = model.evaluate(X_test, y_test, verbose=0)

print(f'Training Loss: {train_loss}')
print(f'Test Loss: {test_loss}')


import pandas as pd
import numpy as np
import random

# Parameters for synthetic data
num_babies = 500  # Number of babies
max_months = 60  # Up to 5 years (60 months)
health_conditions = ["None", "Premature", "Chronic Condition"]
dietary_types = ["Breastfed", "Formula", "Mixed"]
areas = ["Urban", "Rural"]

# Random data generation
data = []
for baby_id in range(1, num_babies + 1):
    gender = random.choice(["Male", "Female"])
    birth_weight = round(random.uniform(2.5, 4.0), 2)  # Birth weight between 2.5kg and 4.0kg
    dietary_type = random.choice(dietary_types)
    area = random.choice(areas)
    health_condition = random.choice(health_conditions)
    
    # Generate weights month by month
    weights = [birth_weight]
    for month in range(1, max_months):
        weight_change = random.uniform(0.1, 0.5)  # Monthly weight gain in kg
        weights.append(round(weights[-1] + weight_change, 2))
    
    # Add record to data
    record = [baby_id, gender, birth_weight, dietary_type, area, health_condition] + weights
    data.append(record)

# Column names
columns = (
    ["Baby_ID", "Gender", "Birth_Weight", "Dietary_Type", "Rural/Urban", "Health_Conditions"] +
    [f"Weight_Month{month}" for month in range(1, max_months + 1)]
)

# Create DataFrame
df = pd.DataFrame(data, columns=columns)

# Save to CSV
output_file = "baby_weight_dataset.csv"
df.to_csv(output_file, index=False)

print(f"Dataset generated and saved to '{output_file}'!")

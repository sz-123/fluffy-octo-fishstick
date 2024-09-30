// Define the first task description as a JavaScript string
var user_request_condition_cap_3_1 = `
Now you are going to reason an appropriate threshold for the conditions based on the force/torque data collected from demonstration.
In the plot below, the blue curve segment represents the resistance force of skill tighten from one demonstration of tightening the cap.
`;

// Insert the first task description into the user-request-cap-container element
document.getElementById('user-request-condition-cap-3-container').innerHTML = '<p>' + user_request_condition_cap_3_1.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_condition_Resistance_Force_of_Skill_tighten_Full = document.createElement('img');
// TODO CHANGE CAP FIGURE
img_condition_Resistance_Force_of_Skill_tighten_Full.src = "examples/condition_reasoning/Resistance_Force_of_Skill_tighten_Full.jpg"; 
img_condition_Resistance_Force_of_Skill_tighten_Full.alt = 'Resistance force tighten plot'; // Optional: Alt text for accessibility
img_condition_Resistance_Force_of_Skill_tighten_Full.style.width = '700px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('user-request-condition-cap-3-container').appendChild(img_condition_Resistance_Force_of_Skill_tighten_Full);

// Define the second task description as a JavaScript string
var user_request_condition_cap_3_2 = `
In addition, we have interfaces to some properties about ft_data:

import numpy as np

class ForceTorqueData:
    # class to process force/torque data
    def __init__(self, data_vector):
        self.data = data_vector
        
    def get_start(self):
        # get the first value of data
        return self.data[0]

    def get_final(self):
        # get the final value of data
        return self.data[-1]

    def get_mean(self):
        # get mean value of data
        return np.mean(self.data)

    def get_magnitude(self, time_index):
        # get magnitude of data at a specific time index
        return self.data[time_index]

    def get_change_rate(self):
        # get time derivative of data
        return np.diff(self.data)

    def get_maximum(self):
        # get maximum value of data 
        return np.max(self.data)

    def get_minimum(self):
        # get minimum value of data
        return np.min(self.data)

data_vector = np.load('data_vector.npy')
ft_data = ForceTorqueData(data_vector)

Based on the plot, use the above interfaces to determine the threshold for the success condition is_tightened in your previous answer.
`;

// Append the second task description into the user-request-cap-container element
var secondTaskElement = document.createElement('p');
secondTaskElement.innerHTML = user_request_condition_cap_3_2.trim().replace(/\n/g, '<br>');

// Append the second task description to the container
document.getElementById('user-request-condition-cap-3-container').appendChild(secondTaskElement);

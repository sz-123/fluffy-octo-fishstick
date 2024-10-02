var user_request_condition_cable_3_1 = `
Now you are going to reason an appropriate threshold for the conditions based on the force/torque data collected from demonstration.
In the plot below, the blue curve segment represents the resistance force of skill stretch from one demonstration of mounting a cable onto several clips.
`;

// Insert the first task description into the user-request-cable-container element
document.getElementById('user-request-condition-cable-3-container').innerHTML = 
  '<p>' + user_request_condition_cable_3_1.trim().replace(/\n/g, '<br>') + '</p>';

// Insert the image after the first task description
var img_condition_Resistance_Force_of_Skill_stretch_Full = document.createElement('img');
img_condition_Resistance_Force_of_Skill_stretch_Full.src = "examples/condition_reasoning/Resistance_Force_of_Skill_stretch_Full.jpg"; 
img_condition_Resistance_Force_of_Skill_stretch_Full.alt = 'Resistance force plot'; // Alt text for accessibility
img_condition_Resistance_Force_of_Skill_stretch_Full.style.width = '400px'; // Optional: Set the image size

// Append the image to the container
document.getElementById('user-request-condition-cable-3-container').appendChild(img_condition_Resistance_Force_of_Skill_stretch_Full);

// Define the second task description (plain text and code)
var user_request_condition_cable_3_2_description = `
In addition, we have interfaces to some properties about ft_data:
`;

var user_request_condition_cable_3_2_code = `
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
        return np.max(this.data)

    def get_minimum(self):
        # get minimum value of data
        return np.min(this.data)

data_vector = np.load('data_vector.npy')
ft_data = ForceTorqueData(data_vector)
`;

var user_request_condition_cable_3_2_footer = `
Based on the plot, use the above interfaces to determine the threshold for the success condition is_stretched in your previous answer.
`;

// Insert the second task description as plain text
// var secondTaskElement = document.createElement('p');
// secondTaskElement.innerHTML = user_request_condition_cable_3_2_description.trim().replace(/\n/g, '<br>');

// Append the second task description to the container
// document.getElementById('user-request-condition-cable-3-container').appendChild(secondTaskElement);

// Highlight and insert the code
// document.getElementById('user-request-condition-cable-3-container').innerHTML += 
//   '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(user_request_condition_cable_3_2_code.trim(), Prism.languages.python, 'python') + '</code></pre>';

// Insert the final descriptive sentence as plain text
var footerElement = document.createElement('p');
footerElement.innerHTML = user_request_condition_cable_3_2_footer.trim().replace(/\n/g, '<br>');
document.getElementById('user-request-condition-cable-3-container').appendChild(footerElement);
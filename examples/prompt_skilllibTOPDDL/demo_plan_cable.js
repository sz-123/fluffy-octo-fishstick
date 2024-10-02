// Define the task description as a JavaScript string
var cableDemoPlan= `
from robot_controller import Controller
from perception import Perception

robot_controller = Controller()
perception = Perception()

database = {
    'clip0': {
        'insertion_direction': [0.46570523669398295, 0.055209602818240555, 0.12001212277970175],
        'name': 'clip0',
        'orientation': [3.5223263542179515, -81.59414579776066, 62.85261380181039],
        'position': [0.534740802846503, 0.18984224077022802, 1.143893533616618],
        'transformation': [
            [0.06670103009905322, -0.9158863939398328, -0.395857406089701, 0.5324062667930362],
            [0.13007984343187193, 0.40133707992617795, -0.9066464484762629, 0.18528944625011248],
            [0.9892574017747984, 0.00898118264263025, 0.14590795538067544, 1.1092695245545001],
            [0.0, 0.0, 0.0, 1.0]
        ]
    },
    'clip5': {
        'insertion_direction': [0.38480919101987576, -0.002588783527356614, 0.12318078037308244],
        'name': 'clip5',
        'orientation': [-88.29786860288444, -86.05190943008893, 37.646705048203984],
        'position': [0.44259719815769566, 0.04198906325056255, 1.1806652303132856],
        'transformation': [
            [0.05451698786586784, 0.771421841833441, -0.6339844161750242, 0.4393261788857436],
            [0.04205457243199921, 0.6325913653757657, 0.7733431174550782, 0.0394657889046426],
            [0.9976268395662293, -0.06882228090269522, 0.0020451600675151023, 1.1208076199393118],
            [0.0, 0.0, 0.0, 1.0]
        ]
    },
    'clip8': {
        'insertion_direction': [-0.1693108926047534, -0.2545835594385389, 0.3853689670417988],
        'name': 'clip8',
        'orientation': [-7.571533650545573, -46.0227168728302, 8.396132629768687],
        'position': [0.5588359151115514, -0.14711041358538335, 1.1481610418254058],
        'transformation': [
            [0.6869309506757593, -0.05094010648506821, -0.7249351519490825, 0.5176200580710059],
            [0.10138976023882597, 0.9945019251051471, 0.026192315789596316, -0.1531937991997129],
            [0.7196151648901954, -0.09149331363510281, 0.6883189580938329, 1.1049841319319942],
            [0.0, 0.0, 0.0, 1.0]
        ]
    }
}

def get_object_property(object, property):
    return database[object][property]

class ObjectSkillLibrary:
    def __init__(self, target_object):
        self.target_object = target_object

    def move_object(self, pose):
        print(f"Moving {self.target_object} to {pose}")
        robot_controller.move_cart_pose(pose)

    def grasp(self):
        print(f"Moving to grasp the {self.target_object} with two fingers")
        robot_controller.move_cart_pose(self.target_object)
        robot_controller.grasp()

    def release(self):
        print(f"Opening the hand of the robot to release the {self.target_object}")
        robot_controller.open_gripper()

class CableSkillLibrary(ObjectSkillLibrary):
    def __init__(self):
        super().__init__("cable")
        
    def insert(self, direction, env_object):
        print(f"Inserting the {self.target_object} in {direction} into {env_object} and then loses contact")
        robot_controller.insert(direction, env_object)
        
    def stretch(self):
        print(f"Stretching the {self.target_object} linearly in opposite directions")
        robot_controller.stretch()

cable_skill_library = CableSkillLibrary()

# Executable plan
cable_skill_library.move_object(get_object_property('clip8', 'position'))
cable_skill_library.insert(get_object_property('clip8', 'insertion_direction'), 'clip8')
cable_skill_library.move_object(get_object_property('clip5', 'position'))
cable_skill_library.insert(get_object_property('clip5', 'insertion_direction'), 'clip5')
`;

// Insert the task description into the user-request-cable-container element
// Use Prism.js to highlight code
document.getElementById('demo-plan-cable-container').innerHTML = 
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(cableDemoPlan.trim(), Prism.languages.python, 'python') + '</code></pre>';
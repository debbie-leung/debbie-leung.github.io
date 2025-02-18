import { TagColor } from "../enums/TagColor";
import { Project } from "../components/Projects";
import { MediaType } from "../enums/MediaType";
import dumboOctopus from '../media/dumbo_robot.mp4';
import wallE from '../media/wall-e.gif';
import rrt from '../media/rrt.gif';
import objectTracking from '../media/object_tracking.gif';
import wallEMap from '../media/walle_map.gif';
import genbioHome from '../media/genbio_home.png';
import genbioLogin from '../media/genbio_login.png';
import genbioRegistration from '../media/genbio_registration.png';
import avrHardware from '../media/avr_hardware.jpg';
import avrPlay from '../media/avr_play.jpg';
import avrCartoon from '../media/avr_cartoon.png';
import rgb from '../media/4_rgb.png';
import predMask from '../media/4_pred_mask.png';
import mesh from '../media/4_mesh01.png';
import booleanArray from '../media/boolean_array.png';
import orientation from '../media/orientation.png';
import voxels from '../media/voxels.png';
import perspective from '../media/perspective.png';
import houghLine from '../media/hough_line.png';

export const technicalProjects: Project[] = [
    {
      title: "Dumbo Octopus Dancing Robot", 
      media: [dumboOctopus],
      mediaType: MediaType.Video,
      tags: [
        { name: "CUDA", color: TagColor.Tool },
        { name: "SolidWorks", color: TagColor.Tool },
        { name: "RaspberryPi", color: TagColor.Tool },
        { name: "Python", color: TagColor.Technology },
        { name: "Robotics", color: TagColor.Topic },
      ],
      description: "Designed, constructed and reiterated prototype of a bio-inspired robot using eight serial bus revolute servomotors to make dance moves in a team of 2, from manufacturing using 3D printing, soldering electronics, conducting simulation to programming on Raspberry Pi controller.",
    },
    {
      title: "3D Reconstruction of Wall-E Robot",
      media: [wallE],
      mediaType: MediaType.Image,
      tags: [
        { name: "MeshLab", color: TagColor.Tool },
        { name: "Python", color: TagColor.Technology },
        { name: "Graphics", color: TagColor.Topic },
      ],
      description: "Implemented a TSDF fusion loop algorithm with transform functions to integrate RGB-D images from camera poses into a 3D reconstruction model of Wall-E Robot.",
    },
    {
      title: "GenBio Database",
      media: [genbioHome, genbioLogin, genbioRegistration],
      mediaType: MediaType.Image,
      tags: [
        { name: "HTML", color: TagColor.Technology },
        { name: "Bootstrap", color: TagColor.Technology },
        { name: "Jinja", color: TagColor.Technology },
        { name: "Flask", color: TagColor.Technology },
        { name: "PostgreSQL", color: TagColor.Technology },
        { name: "Databases", color: TagColor.Topic },
      ],
      description: "Integrated interests in marine biology and ecology into building a web app connected to a database server in a team of 2 that allows users to access Gebbank genetic sequences and GBIF occurrence data of various organisms.",
    },
    {
      title: "Pick and Place Robotic Path-Planning",
      media: [rrt],
      mediaType: MediaType.Image,
      tags: [
        { name: "Python", color: TagColor.Technology },
        { name: "PyBullet", color: TagColor.Technology },
        { name: "PyTorch", color: TagColor.Technology },
        { name: "Robotics", color: TagColor.Topic },
      ],
      description: "Manipulated UR5 robot to perform autonomous bin picking in simulation. A rapidly exploring random tree (RRT) path planning algorithm was written to implement grasping of items from one bin to another while avoiding collision with obstacles.",
    },
    {
      title: "Histogram Based Object Tracking",
      media: [objectTracking],
      mediaType: MediaType.Image,
      tags: [
        { name: "Matlab", color: TagColor.Technology },
        { name: "Vision", color: TagColor.Topic },
      ],
      description: "Developed a vision system that tracks the location of an object across video frames regardless of changes in appearance, pose and scale. Using color histogram based tracking, the algorithm generates a color map from the object of interest, and computes subsequent color histograms based on the same color map for comparison.",
    },
    {
      title: "Learning-Based Self-Driving Robot",
      media: [wallEMap],
      mediaType: MediaType.Image,
      tags: [
        { name: "Python", color: TagColor.Technology },
        { name: "PyBullet", color: TagColor.Technology },
        { name: "PyTorch", color: TagColor.Technology },
        { name: "Robotics", color: TagColor.Topic },
      ],
      description: "Trained a Convolutional Neural Network (CNN) as action classifier using imitation and transfer learning that teaches Wall-E robot to trace any boundaries by hitting landmarks from collected demonstration image observation.",
    },
    {
      title: "Space Impact",
      media: [avrHardware, avrPlay, avrCartoon],
      mediaType: MediaType.Image,
      tags: [
        { name: "Atmel Studio", color: TagColor.Tool },
        { name: "Putty", color: TagColor.Tool },
        { name: "C/C++", color: TagColor.Technology },
        { name: "Embedded Systems", color: TagColor.Topic },
      ],
      description: "Implemented basic functionality of the Space Impact game with joystick, sound and additional features on the AVR Atmega324A microcontroller that allows user interaction and outputs the display to a LED matrix board and the serial terminal.",
    },
    {
      title: "Object Segmentation and Pose Estimation",
      media: [rgb, predMask, mesh],
      mediaType: MediaType.Image,
      tags: [
        { name: "PyTorch", color: TagColor.Technology },
        { name: "GCP", color: TagColor.Technology },
        { name: "Graphics", color: TagColor.Topic },
      ],
      description: "Constructed a neural network to perform segmentation using RGB images and ground truth instance segmentation masks from simulated camera. The model is then used with depth images to estimate object pose.",
    },
    {
      title: "Object Detection and Properties Computation",
      media: [booleanArray, orientation, voxels, perspective, houghLine],
      mediaType: MediaType.Image,
      tags: [
        { name: "Python", color: TagColor.Technology },
        { name: "OpenCV", color: TagColor.Technology },
        { name: "Vision", color: TagColor.Topic },
      ],
      description: "Implemented a streamlined computer vision pipeline that processes images of a robotic gripper in layered assembly. They include a watershed algorithm to filter out voxel relative positions from gripper, calculations of centroid and orientation offsets, perspective correction on gripper outline and hough line transform to detect electrode boundaries.",
    }
  ];
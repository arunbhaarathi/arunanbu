export interface Project {
  title: string;
  abstract: string;
  tags: string[];
  viewLink: string;
  githubLink: string;
  demoLink: string;
  /** Future: thumbnail image path or URL */
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Dense Optical Flow based Depth Estimation from Monocular Camera Feeds Utilizing Camera Ego-Motion for Visual Inertial Odometry Development",
    abstract: "Developed a depth estimation system using dense optical flow and monocular camera ego-motion to address limitations of sparse feature-based methods in low-feature environments. Generated a synthetic Blender dataset with optical flow and depth ground truth for quantitative evaluation.",
    tags: ["Computer Vision", "Depth Estimation", "Optical Flow", "VIO", "Blender"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Image Stitching for Underwater Imagery with Loop Closure Optimization using GTSAM",
    abstract: "Built an underwater image stitching pipeline for low-contrast environments using feature matching, RANSAC-based outlier rejection, homography estimation, and panorama generation. Improved loop closure consistency using GTSAM factor graph optimization.",
    tags: ["Computer Vision", "Image Stitching", "GTSAM", "RANSAC", "Underwater Imaging"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Structure from Motion: 3D Reconstruction",
    abstract: "Implemented a full structure-from-motion pipeline for reconstructing 3D scenes from 2D image sequences, including feature extraction, epipolar geometry, camera pose estimation, triangulation, and bundle adjustment with GTSAM.",
    tags: ["SfM", "3D Reconstruction", "GTSAM", "Epipolar Geometry", "Computer Vision"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Sensor Fusion for Vehicle Navigation: Implementing an Extended Kalman Filter to Integrate GPS and IMU Data",
    abstract: "Developed an Extended Kalman Filter in Python to fuse GPS and IMU data for vehicle pose estimation. Modeled prediction and correction steps, handled IMU drift, and compared raw and filtered navigation performance.",
    tags: ["Sensor Fusion", "EKF", "GPS", "IMU", "Navigation"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "A Comparison of Informed Search Algorithms for Path Planning Applications",
    abstract: "Evaluated UCS, A*, Dijkstra, and RRT for autonomous robot navigation using ROS, Gazebo, TurtleBot3, and RViz. Compared algorithmic efficiency, robustness, and suitability for dynamic environments.",
    tags: ["Robotics", "Path Planning", "ROS", "Gazebo", "TurtleBot3"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Market Vision: AI-Enabled Assistive Technology for Visually Impaired",
    abstract: "Contributed to an AI-based assistive vision system for grocery item recognition using image classification and segmentation. Built the core ML model using the Fruits360 dataset and supported real-time audio feedback for accessibility.",
    tags: ["AI", "Accessibility", "Computer Vision", "Classification", "Segmentation"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Visual Simultaneous Localization and Mapping using ORBSLAM3",
    abstract: "Studied and improved ORB-SLAM3 using real-world camera data, focusing on localization accuracy, parameter tuning, and robustness for autonomous navigation in dynamic environments.",
    tags: ["SLAM", "ORB-SLAM3", "Localization", "Mapping", "Robotics"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Multi sensor fusion for inertial navigation",
    abstract: "Built a ROS-based multi-sensor fusion pipeline using GPS and VectorNav IMU data collected on a car in Boston. Analyzed IMU drift and bias, implemented complementary filters, and evaluated dead reckoning performance against GPS ground truth.",
    tags: ["Sensor Fusion", "ROS", "IMU", "GPS", "Inertial Navigation"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
  {
    title: "Noise Analysis of GNSS and RTK-GNSS sensors",
    abstract: "Conducted a detailed noise analysis of GNSS and RTK-GNSS sensors by building ROS drivers, collecting datasets, and quantifying sensor noise characteristics to improve localization reliability.",
    tags: ["GNSS", "RTK-GNSS", "ROS", "Localization", "Sensor Analysis"],
    viewLink: "",
    githubLink: "",
    demoLink: "",
  },
];

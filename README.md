<div id="top" align="center">

[![Forks](https://img.shields.io/github/forks/swagatobag2000/digit-recognition-webapp?style=for-the-badge)](https://github.com/swagatobag2000/digit-recognition-webapp/network/members)
[![Stargazers](https://img.shields.io/github/stars/swagatobag2000/digit-recognition-webapp?color=red&style=for-the-badge)](https://github.com/swagatobag2000/digit-recognition-webapp/stargazers)
[![Contributors](https://img.shields.io/github/contributors/swagatobag2000/digit-recognition-webapp?color=green&style=for-the-badge)](https://github.com/swagatobag2000/digit-recognition-webapp/graphs/contributors)
[![Issues](https://img.shields.io/github/issues/swagatobag2000/digit-recognition-webapp?color=yellow&style=for-the-badge)](https://github.com/swagatobag2000/digit-recognition-webapp/issues)
[![MIT License](https://img.shields.io/github/license/swagatobag2000/digit-recognition-webapp?style=for-the-badge)](https://github.com/swagatobag2000/digit-recognition-webapp/blob/master/LICENSE)

</div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/swagatobag2000/digit-recognition-webapp">
    <img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/logo_web.jpg" alt="Logo">
  </a>

  <h3 align="center">Handwritten Digit Recognition</h3>
  <a href="https://github.com/swagatobag2000/digit-recognition-mobileapp">
    <img src="https://img.shields.io/badge/Android-3DDC84?style=flat-square&logo=android&logoColor=white" alt="Logo">
  </a>
    <a href="https://github.com/swagatobag2000/digit-recognition-webapp">
    <img src="https://img.shields.io/badge/Windows-0078D6?style=flat-square&logo=windows&logoColor=white" alt="Logo">
  </a>
  <p align="center">
    Android App (Click Android), Web Application (Click Windows) and Beyond
  </p>

 

  <p align="center">
    <a href="https://github.com/swagatobag2000/digit-recognition-webapp">View Demo</a>
    ·
    <a href="https://github.com/swagatobag2000/digit-recognition-webapp/issues">Report Bug</a>
    ·
    <a href="https://github.com/swagatobag2000/digit-recognition-webapp/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#abstract">Abstract</a></li>
        <li><a href="#overview">Overview</a></li>
        <li><a href="#problem-definition">Problem Definition</a></li>
        <li><a href="#purpose">Purpose</a></li>
        <li><a href="#scope">Scope</a></li>
      </ul>
    </li>
    <li>
      <a href="#project-imp">Project Implementation</a>
      <ul>
        <li><a href="#data-analysis">DL - DATA ANALYSIS & MODELLING</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#model-used">Model Used</a></li>
        <li><a href="#data-aug">Model With Data Augmentation</a></li>
        <li><a href="#exporting-model">Exporting Model</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<div id = "#about-the-project">

  ## About The Project


https://user-images.githubusercontent.com/46164852/163679444-d9c77f72-c3c7-4de8-929d-1d5ba5e79663.mp4


  <div id = "#abstract">

    
  ### Abstract
  This project deals with the very popular learning process called
  Deep learning using Neural Networks. There are various ways by which one can achieve the goal to a desired output, but in machine learning Neural network gives a way that machine learns the way to reach the output by creating human brain like structures i.e. 'NEURONS'.<br/>
  </div>

  <div id = "#overview">

  ### Overview
  In this given project we were required to make a full-stack application backed by a Deep Learning Model to predict the handwritten digit.
  </div>

  <div id = "#problem-definition">

  ### Problem Definition
  The goal was to create an appropriate model that can give the output of the handwritten character by drawing that character. This project has to be created by image processing and the machine learning. Both the techniques will be needed because these two techniques will enhance the technique of the machine learning and that can shape this project.
  </div>

  <div id = "#purpose">

  ### Purpose  
  Neural Network and Deep Learning are the trending topics for now.  And this is a simple project for handwriting recognition. The extension of the project can be used in large scale to detect the written character from images and to extract them in no time.Or in banking signature recognition or in license plate verification, Real time image chaining or filtering or object detection etc.
  </div>

  <div id = "#scope">

  ### Scope  
  This includes making an DL model, then making a beautiful UI, so that we could draw the digits, and with the help of the DL model, we can predict the handwritten character.
  </div>
</div>

<p align="right">(<a href="#top">back to top</a>)</p>

<div align="center">
<img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/image1.jpg" height="450em" />&emsp;<img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/image2.gif" height="450" />&emsp;<img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/image3.jpg" height="450em" /><br>
</div>

<div id = "#project-imp">

  ## Project Implementation

  <div id="#data-analysis">

  ### DL - DATA ANALYSIS & MODELLING
  The MNIST dataset (Modified National Institute of Standards and Technology) is used. It is widely used for training and testing in the field of machine learning. It was created by "re-mixing" the samples from NIST's original datasets. The black and white images from NIST were normalized to fit into a 28x28 pixel bounding box with grayscale color channel.
  </div>

  <div id = "#built-with">

  ### Built With

  | | Machine Learning Stack  | Web Application Stack  | Mobile App | 
  |-| :---------------------- | :--------------------- | :--------- |
  | | [![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/) | [![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) | [![Flutter](https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=white)](https://flutter.dev/) |
  | | [![Pandas](https://img.shields.io/badge/pandas-%23150458.svg?style=for-the-badge&logo=pandas&logoColor=white)](https://pandas.pydata.org/) | [![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) | [![Dart](https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white)](https://dart.dev/) |
  | | [![NumPy](https://img.shields.io/badge/numpy-%23013243.svg?style=for-the-badge&logo=numpy&logoColor=white)](https://numpy.org/) | [![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/) |  |
  | | [![scikit-learn](https://img.shields.io/badge/scikit--learn-%23F7931E.svg?style=for-the-badge&logo=scikit-learn&logoColor=white)](https://scikit-learn.org/) | [![jQuery](https://img.shields.io/badge/jquery-%230769AD.svg?style=for-the-badge&logo=jquery&logoColor=white)](https://jquery.com/) | 
  | | [![Keras](https://img.shields.io/badge/Keras-%23D00000.svg?style=for-the-badge&logo=Keras&logoColor=white)](https://keras.io/) | [![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/) | 
  | | [![TensorFlow](https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=for-the-badge&logo=TensorFlow&logoColor=white)](https://www.tensorflow.org/) |  |  |

  </div>

  <p align="right">(<a href="#top">back to top</a>)</p>

  <div id = "#model-used">

  ### Model Used
   - CNN is used.
   - **[[Conv2D->relu]2 -> MaxPool2D -> Dropout]2 -> Flatten -> Dense -> Dropout -> Out**
   - **Optimizer** : RMSprop -> Root Mean Squared Propagation
   - **Loss Function** : categorical_crossentropy -> Used in multi-class classification model 
   - **Learning Rate Annealer** : ReduceLROnPlateau -> Reduce learning rate when a metric has stopped improving
   - **Metric** : accuracy
   - **Model**: "sequential"

  | | Layer (type)                    |      Output Shape      |  Param     |  
  |-| :------------------------------ | :--------------------- | :--------- |
  | | conv2d (Conv2D)                 | (None, 28, 28, 32)     | 832        |   
  | | conv2d_1 (Conv2D)               | (None, 28, 28, 32)     | 25632      |
  | | max_pooling2d (MaxPooling2D)    | (None, 14, 14, 32)     | 0          |
  | | dropout (Dropout)               | (None, 14, 14, 32)     | 0          |
  | | conv2d_2 (Conv2D)               | (None, 14, 14, 64)     | 18496      |
  | | conv2d_3 (Conv2D)               | (None, 14, 14, 64)     | 36928      |
  | | max_pooling2d_1 (MaxPooling 2D) | (None, 7, 7, 64)       | 0          |
  | | dropout_1 (Dropout)             | (None, 7, 7, 64)       | 0          |
  | | flatten (Flatten)               | (None, 3136)           | 0          |
  | | dense (Dense)                   | (None, 256)            | 803072     |
  | | dropout_2 (Dropout)             | (None, 256)            | 0          |
  | | dense_1 (Dense)                 | (None, 10)             | 2570       |

  ___________________________________________________________________________
  Total params: 887,530

  Trainable params: 887,530

  Non-trainable params: 0
  ___________________________________________________________________________

  <div align="center">
    <img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/modelling_graph.jpg" height="500em" />
  </div>

   - **Time Elapsed**: 00:05:12.63
   - **Training Accuracy** : 0.9887
   - **Validation Accuracy** : 0.991

  </div>

  <p align="right">(<a href="#top">back to top</a>)</p>

  <div id = "#data-aug">

  ### Model With Data augmentation
  In order to avoid overfitting problem, we need to expand artificially our handwritten digit dataset. We can make your existing dataset even larger. The idea is to alter the training data with small transformations to reproduce the variations occuring when someone is writing a digit.

  ```python
  datagen = ImageDataGenerator(
    featurewise_center=False,  # set input mean to 0 over the dataset
    samplewise_center=False,  # set each sample mean to 0
    featurewise_std_normalization=False,  # divide inputs by std of the dataset
    samplewise_std_normalization=False,  # divide each input by its std
    zca_whitening=False,  # apply ZCA whitening
    rotation_range=10,  # randomly rotate images in the range (degrees, 0 to 180)
    zoom_range = 0.1, # Randomly zoom image 
    width_shift_range=0.1,  # randomly shift images horizontally (fraction of total width)
    height_shift_range=0.1,  # randomly shift images vertically (fraction of total height)
    horizontal_flip=False,  # randomly flip images
    vertical_flip=False,  # randomly flip images
    fill_mode='nearest')

  ```

  <div align="center">
    <img src="https://raw.githubusercontent.com/swagatobag2000/digit-recognition-webapp/main/images/modelling_graph2.jpg" height="500em" />
  </div>

   - **Time Elapsed**: 00:15:11.24
   - **Training Accuracy** : 0.9850
   - **Validation Accuracy** : 0.991

  </div>

  <div id="exporting-model">

  ### Exporting Model
  - To save whole model configuration + weights
      ```python
      model.save('digit_recognition.h5') 
      ```
  - To save the architecture of a model
      ```python
      model_json = model.to_json()
      with open("digit_recognition_config.json","w") as json_file:
          json_file.write(model_json) 
      ```
  - To save model with .tflite extension
      ```python
      converter = tf.lite.TFLiteConverter.from_keras_model(model)
      tflite_model = converter.convert()

      with open('digit_recognition.tflite', 'wb') as tfliteFile:
        tfliteFile.write(tflite_model)
      ```
  - To save model with tensorflowjs
      ```python
      import tensorflowjs as tfjs
      tfjs.converters.save_keras_model(model,".")
      ```
  </div>
</div>

<!-- LICENSE -->
<div id="license">
  
  ## License
  Distributed under the MIT License. See `LICENSE.txt` for more information.
</div>
<p align="right">(<a href="#top">back to top</a>)</p>



<div id="acknowledgments">

## Acknowledgments

  Well, this is the last part of this repository. Here are the list of links which helped me to build this whole project, the android one and the web one.

  * [Choose an Open Source License](https://choosealicense.com)
  * [GitHub Emoji Cheat Sheet](https://www.webpagefx.com/tools/emoji-cheat-sheet)
  * [Img Shields](https://shields.io)
  * [Sample ReadMe File](https://github.com/othneildrew/Best-README-Template)
  * [markdown-badges](https://github.com/Ileriayo/markdown-badges)
  * [Modelling (Kaggle)](https://www.kaggle.com/code/puzzleleaf/introduction-to-cnn-keras-0-997-top-6/notebook)
  * [Modelling (Keras Blog)](https://blog.keras.io/building-powerful-image-classification-models-using-very-little-data.html)
  * [Tensorflow Blog](https://www.tensorflow.org/js/tutorials/conversion/import_keras)
  * [Webapp (maneprajakta)](https://github.com/maneprajakta/Digit_Recognition_Web_App)
  * [Android App (PuzzleLeaf)](https://github.com/PuzzleLeaf/flutter_tensorflow_lite_digit_recognizer)
  * [OpenCV (amarlearning)](https://github.com/amarlearning/digit-recognition-opencv-cnn)

  </div>

<p align="right">(<a href="#top">back to top</a>)</p>

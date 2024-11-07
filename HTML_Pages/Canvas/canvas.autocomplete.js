//Colors, Styles, and Shadows
context.fillStyle      //Sets or returns the color, gradient, or pattern used to fill the drawing
context.strokeStyle    //Sets or returns the color, gradient, or pattern used for strokes
context.shadowBlur     //Sets or returns the blur level for shadows
context.shadowColor    //Sets or returns the color to use for shadows
context.shadowOffsetX  //Sets or returns the horizontal distance of the shadow from the shape
context.shadowOffsetY  //Sets or returns the vertical distance of the shadow from the shape

context.createLinearGradient() //Creates a linear gradient (to use on canvas content)
context.createPattern()        //Repeats a specified element in the specified direction
context.createRadialGradient(x0,y0,r0,x1,y1,r1)  //Creates a radial/circular gradient (to use on canvas content)
context.addColorStop() //Specifies the colors and stop positions in a gradient object

//Line Styles
context.lineCap="butt|round|square";  //Sets or returns the style of the end caps for a line
context.lineJoin="bevel|round|miter"; //Sets or returns the type of corner created, when two lines meet
context.lineWidth                     //Sets or returns the current line width
context.miterLimit                    //Sets or returns the maximum miter length

//Rectangle
context.rect(x,y,width,height);       //Creates a rectangle
context.fillRect(x,y,width,height);   //Draws a "filled" rectangle
context.strokeRect(x,y,width,height); //Draws a rectangle (no fill)
context.clearRect();                  //Clears the specified pixels within a given rectangle

//Paths
context.fill();             //Fills the current drawing (path)
context.stroke();           //Actually draws the path you have defined
context.beginPath();        //Begins a path, or resets the current path
context.moveTo(x,y);        //Moves the path to the specified point in the canvas, without creating a line
context.closePath();        //Creates a path from the current point back to the starting point
context.lineTo(x,y);        //Adds a new point and creates a line to that point from the last specified point in the canvas
context.clip();             //Clips a region of any shape and size from the original canvas
context.quadraticCurveTo(); //Creates a quadratic Bézier curve
context.bezierCurveTo();    //Creates a cubic Bézier curve
context.arc();              //Creates an arc/curve (used to create circles, or parts of circles)
context.arcTo();            //Creates an arc/curve between two tangents
context.isPointInPath();    //Returns true if the specified point is in the current path, otherwise false

//Transformations
context.scale();        //Scales the current drawing bigger or smaller
context.rotate();       //Rotates the current drawing
context.translate();    //Remaps the (0,0) position on the canvas
context.transform();    //Replaces the current transformation matrix for the drawing
context.setTransform(); //Resets the current transform to the identity matrix. Then runs transform()

//Text
context.font           //Sets or returns the current font properties for text content
context.textAlign      //Sets or returns the current alignment for text content
context.textBaseline   //Sets or returns the current text baseline used when drawing text
context.fillText();    // Draws "filled" text on the canvas
context.strokeText();  //Draws text on the canvas (no fill)
context.measureText(); //Returns an object that contains the width of the specified text

//Image Drawing
context.drawImage() 	//Draws an image, canvas, or video onto the canvas

//Pixel Manipulation
context.width              //Returns the width of an ImageData object
context.height             //Returns the height of an ImageData object
context.data               //Returns an object that contains image data of a specified ImageData object
context.createImageData(); //Creates a new, blank ImageData object
context.getImageData();    //Returns an ImageData object that copies the pixel data for the specified rectangle on a canvas
context.putImageData();    //Puts the image data (from a specified ImageData object) back onto the canvas

//Compositing
context.globalAlpha              //Sets or returns the current alpha or transparency value of the drawing
context.globalCompositeOperation //Sets or returns how a new image is drawn onto an existing image

//Other
context.save() 	    //Saves the state of the current context
context.restore() 	//Returns previously saved path state and attributes
context.createEvent()
context.getContext()
context.toDataURL()
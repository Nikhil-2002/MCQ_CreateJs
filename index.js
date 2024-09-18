const stage = new createjs.Stage("shapesCanvas");

function createShape(shapeType, color, x, y) {
  let shape = new createjs.Shape();
  shape.graphics.beginFill(color);

  if (shapeType === "hexagon") {
    shape.graphics.drawPolyStar(0, 0, 50, 6, 0, 0);
  } else if (shapeType === "circle") {
    shape.graphics.drawCircle(0, 0, 50);
  } else if (shapeType === "square") {
    shape.graphics.drawRect(-50, -50, 100, 100);
  } else if (shapeType === "triangle") {
    shape.graphics.drawPolyStar(0, 0, 65, 3, 0, -90);
  }

  shape.x = x;
  shape.y = y;
  shape.shapeType = shapeType;
  shape.addEventListener("click", handleShapeClick);

  stage.addChild(shape);
  stage.update();
}

function handleShapeClick(event) {
  const selectedShape = event.target.shapeType;

  if (selectedShape === "hexagon") {
    console.log("Correct!");
    alert("Correct answer...😊");
  } else {
    console.log("Wrong!");
  }
}

createShape("circle", "red", 100, 150);
createShape("square", "blue", 220, 150);
createShape("hexagon", "green", 340, 150);
createShape("triangle", "orange", 460, 160);

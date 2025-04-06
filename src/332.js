// 画图函数
function drawLine(x1, y1, x2, y2) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

    // 添加图例元素
    const titleText = document.createElement('div');
    titleText.textContent = '直线图';
    canvas.appendChild(titleText);

    return canvas;
}

// 画图函数 - 原地更新
function drawLineInPlace(x1, y1, x2, y2) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

    // 添加图例元素
    const titleText = document.createElement('div');
    titleText.textContent = '直线图';
    canvas.appendChild(titleText);

    return canvas;
}

// 画图函数 - 原地改变参数
function drawLineInPlaceWithParams(x1, y1, x2, y2) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

    // 添加图例元素
    const titleText = document.createElement('div');
    titleText.textContent = '直线图';
    canvas.appendChild(titleText);

    return canvas;
}

// 画线函数 - 原地改变参数
function drawLineInPlaceWithParams(x1, y1, x2, y2) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x2, y2);
    context.stroke();

    // 添加图例元素
    const titleText = document.createElement('div');
    titleText.textContent = '直线图';
    canvas.appendChild(titleText);

    return canvas;
}

// 画线函数 - 随机改变参数
function drawLineInPlaceWithParams(x1, y1) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x1, 0);
    context.stroke();

    return canvas;
}

// 画图函数 - 原地改变参数，同时添加图例
function drawLineInPlaceWithParams2(x1, y1) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');

    // 绘制线段
    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(x1, 0);
    context.stroke();

    return canvas;
}

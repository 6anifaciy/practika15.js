document.addEventListener('DOMContentLoaded', function () {
    const colorBlock = document.getElementById('colorBlock');
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    let colorInterval;

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    startButton.addEventListener('click', function () {
        if (!colorInterval) {
            colorInterval = setInterval(function () {
                colorBlock.style.backgroundColor = getRandomColor();
            }, 500); // Меняем цвет каждые 0.5 секунд
        }
    });

    stopButton.addEventListener('click', function () {
        clearInterval(colorInterval);
        colorInterval = null;
    });
});

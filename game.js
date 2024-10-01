let currentQuestion = 0;  
let correctAnswers = 0;  
let correctAnswer = 0;  

function generateQuestion() {  
    const type = Math.floor(Math.random() * 4); // 問題のタイプを決定  
    let num1, num2;  

    switch (type) {  
        case 0: // 対数  
            num1 = Math.floor(Math.random() * 10) + 1; // 1から10の範囲  
            correctAnswer = Math.log(num1) / Math.log(10); // 常用対数  
            document.getElementById('question').innerText = `log10(${num1}) = ?`;  
            break;  

        case 1: // 三角関数  
            num1 = Math.floor(Math.random() * 360); // 0から359の範囲  
            correctAnswer = Math.sin(num1 * (Math.PI / 180)); // サイン  
            document.getElementById('question').innerText = `sin(${num1}°) = ?`;  
            break;  

        case 2: // 根号  
            num1 = Math.floor(Math.random() * 100); // 0から99の範囲  
            correctAnswer = Math.sqrt(num1); // 平方根  
            document.getElementById('question').innerText = `√${num1} = ?`;  
            break;  

        case 3: // 累乗  
            num1 = Math.floor(Math.random() * 10) + 1; // 1から10  
            num2 = Math.floor(Math.random() * 5) + 1; // 1から5  
            correctAnswer = Math.pow(num1, num2); // 累乗  
            document.getElementById('question').innerText = `${num1}^${num2} = ?`;  
            break;  
    }  
}  

function checkAnswer() {  
    const userAnswer = parseFloat(document.getElementById('answer').value).toFixed(5);  
    
    if (userAnswer == correctAnswer.toFixed(5)) { // 精度を合わせる  
        correctAnswers++;  
        document.getElementById('result').innerText = '正解！';  
    } else {  
        document.getElementById('result').innerText = '不正解...';  
        correctAnswers = 0; // リセット  
    }  

    document.getElementById('score').innerText = `現在の正解数: ${correctAnswers}`;  
    
    if (correctAnswers === 10) {  
        alert('ゲームクリア！おめでとうございます！');  
        correctAnswers = 0; // リセット  
    }  

    document.getElementById('answer').value = ''; // 入力フィールドをクリア  
    generateQuestion(); // 新しい問題を生成  
}  

// 初期状態  
generateQuestion(); // 最初の問題を生成  
document.getElementById('score').innerText = `現在の正解数: ${correctAnswers}`;  

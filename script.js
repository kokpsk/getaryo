document.getElementById('generateButton').addEventListener('click', function() {
  let lottoNumbers = generateLottoNumbers();
  displayLottoNumbers(lottoNumbers);
});

function generateLottoNumbers() {
  let numbers = [];
  while (numbers.length < 6) {
    let randomNumber = Math.floor(Math.random() * 45) + 1;
    if (!numbers.includes(randomNumber)) {
      numbers.push(randomNumber);
    }
  }
  return numbers.sort((a, b) => a - b);
}

function displayLottoNumbers(numbers) {
  // SweetAlert2로 경고창 띄우기
  Swal.fire({
    title: '청소 번호 생성 결과',
    html: `
      <div class="text-lg">
        <p>당신의 청소 번호는 <strong>${numbers.join(', ')}</strong> 입니다!</p>
      </div>
    `,
    icon: 'success',
    confirmButtonText: '확인',
    customClass: {
      title: 'text-2xl font-bold text-center text-blue-900 mb-4',
      htmlContainer: 'text-base text-gray-800',
      confirmButton: 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
    }
  });
}


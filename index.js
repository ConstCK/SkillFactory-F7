const alphaCapital = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
const alphaLower = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";

function encode(letter, shift) {
  if (alphaCapital.includes(letter)) {
    const index = alphaCapital.indexOf(letter);
    return alphaCapital[(index + Number(shift)) % 33];
  } else if (alphaLower.includes(letter)) {
    const index = alphaLower.indexOf(letter);
    return alphaLower[(index + Number(shift)) % 33];
  } else {
    return letter;
  }
}

function decode(letter, shift) {
  if (alphaCapital.includes(letter)) {
    const index = alphaCapital.indexOf(letter);
    return alphaCapital[(index + 33 - Number(shift)) % 33];
  } else if (alphaLower.includes(letter)) {
    const index = alphaLower.indexOf(letter);
    return alphaLower[(index + 33 - Number(shift)) % 33];
  } else {
    return letter;
  }
}

const app = new Vue({
  el: "#result",
  data: {
    message: "",
  },
  methods: {
    decodeMessage: function () {
      console.log(test_data);
    },
  },
});

$("#encode-btn").on("click", function () {
  const shift = $("#code_algorithm").val();
  const text = $("#encode_input").val();
  let result = "";
  for (letter of text) {
    result += encode(letter, shift);
  }
  app.message = result;
  $("#encode_input").val("");
});

$("#decode-btn").on("click", function () {
  const shift = $("#code_algorithm").val();
  const text = $("#decode_input").val();
  let result = "";
  for (letter of text) {
    result += decode(letter, shift);
  }
  app.message = result;
  $("#decode_input").val("");
});

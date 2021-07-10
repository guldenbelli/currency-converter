function Calculate() {
  const input_currency = document.getElementById("converter").value;
  const output_currency = document.getElementById("converter2").value;

  const inputElement = document.getElementById("value1");
  const outputElement = document.getElementById("value2");

  const input = parseFloat(inputElement.value)
  let output = "";

  switch (input_currency) {

    case "CAD":

      // CAD to GBP
      if (output_currency == "GBP") {
        output = input * 0.58
      }

      // CAD to CHF
      else if (output_currency == "CHF") {
        output = input * 0.73
      }

      // CAD to EUR
      else if (output_currency == "EUR") {
        output = input * 0.67
      }

      // CAD to JPY
      else if (output_currency == "JPY") {
        output = input * 87.65
      }

      // CAD to USD
      else if (output_currency == "USD") {
        output = input * 0.80
      }

      break;


    case "CHF":

      // CHF to GBP
      if (output_currency == "GBP") {
        output = input * 0.58
      }

      // CHF to CAD
      else if (output_currency == "CAD") {
        output = input * 1.37
      }

      // CHF to EUR
      else if (output_currency == "EUR") {
        output = input * 0.67
      }

      // CHF to JPY
      else if (output_currency == "JPY") {
        output = input * 87.65
      }

      // CHF to USD
      else if (output_currency == "USD") {
        output = input * 0.80
      }

      break;

    case "EUR":

      // EUR to GBP
      if (output_currency == "GBP") {
        output = input * 0.8631
      }

      // EUR to CAD
      else if (output_currency == "CAD") {
        output = input * 1.48
      }

      // EUR to CHF
      else if (output_currency == "CHF") {
        output = input * 1.3135
      }

      // EUR to JPY
      else if (output_currency == "JPY") {
        output = input * 130.03
      }

      // EUR to USD
      else if (output_currency == "USD") {
        output = input * 1.2897
      }

      break;

    case "GBP":

      // GBP to CAD
      if (output_currency == "CAD") {
        output = input * 1.73
      }

      // GBP to CHF
      else if (output_currency == "CHF") {
        output = input * 1.26
      }

      // CAD to EUR
      else if (output_currency == "EUR") {
        output = input * 1.16
      }

      // GBP to JPY
      else if (output_currency == "JPY") {
        output = input * 151.20
      }

      // GBP to USD
      else if (output_currency == "USD") {
        output = input * 1.38
      }

      break;

    case "JPY":

      // JPY to CAD
      if (output_currency == "CAD") {
        output = input * 1.73
      }

      // JPY to CHF
      else if (output_currency == "CHF") {
        output = input * 1.26
      }

      // JPY to EUR
      else if (output_currency == "EUR") {
        output = input * 1.16
      }

      // JPY to GBP
      else if (output_currency == "GBP") {
        output = input * 1.16
      }

      // JPY to USD
      else if (output_currency == "USD") {
        output = input * 1.38
      }

      break;

    case "USD":

      // USD to CAD
      if (output_currency == "CAD") {
        output = input * 1.25
      }

      // USD to CHF
      else if (output_currency == "CHF") {
        output = input * 0.92
      }

      // USD to EUR
      else if (output_currency == "EUR") {
        output = input * 0.84
      }

      // USD to GBP
      else if (output_currency == "GBP") {
        output = input * 0.73
      }

      // USD to JPY
      else if (output_currency == "JPY") {
        output = input * 109.85
      }

      break;

  }
  outputElement.value = output;
}

// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mariam Kasim
// Created on: Mar 2023
// This file contains the JS functions for index.html

"use strict"
const getrandomquote = async (URLAdress) => {
  try {
    const response = await fetch(URLAdress)
    const jsonData = await response.json()
    document.getElementById("quote").innerHTML = jsonData.quote
  } catch (err) {
    console.log(err)
  }
}

getrandomquote("https://api.kanye.rest/")


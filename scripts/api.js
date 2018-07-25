'use strict';
/* global $ */

const api = (function() {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/timothy-clint';

  let getItems = function(callback) {
    $.getJSON(`${BASE_URL}/items`,callback);
  };

  let createItem = function(name, callback, error) {
    const newItem = JSON.stringify({ name: name });
    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/json',
      data: newItem,
      success: callback,
      error: error
    });
  };

  let updateItem = function(id, updateData, callback, error){
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data:JSON.stringify(updateData),
      success: callback,
      error: error
    });
  };

  let deleteItem = function(id, callback, error) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'DELETE',
      contentType: 'application/json',
      success: callback,
      error: error
    });
  };

  return { getItems, createItem, updateItem, deleteItem };
}() );

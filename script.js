'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// Google Maps APIの読み込み
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap" async defer></script>

// 地図を表示する要素のHTML
<div id="map"></div>

// JavaScriptでの記述
function initMap() {
  // 地図の中心座標を指定
  const center = { lat: 35.681236, lng: 139.767125 };

  // 地図のオプションを指定
  const mapOptions = {
    zoom: 13, // ズームレベル
    center: center, // 地図の中心座標
  };

  // 地図を表示する要素とオプションを指定して地図オブジェクトを作成
  const map = new google.maps.Map(document.getElementById("map"), mapOptions);

  // 水素ステーションの座標を指定
  const stationLatLng = { lat: 35.658580, lng: 139.745433 };

  // 水素ステーションのマーカーを作成
  const stationMarker = new google.maps.Marker({
    position: stationLatLng, // マーカーの座標
    map: map, // マーカーを表示する地図オブジェクト
    title: "水素ステーション", // マーカーに表示するタイトル
  });
}
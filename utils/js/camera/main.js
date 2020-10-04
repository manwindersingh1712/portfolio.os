Webcam.set({
  width: 1000,
  height: 600,
  image_format: "jpeg",
  jpeg_quality: 90,
});
Webcam.attach("#camera");

function capture() {
  Webcam.snap(function (data_uri) {
    document.getElementById("pic").innerHTML = `<img src="` + data_uri + `"/>`;
  });
}

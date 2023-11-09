import { Spectrum } from "../assets/waterfall/spectrum.js";

import { setActivePinia } from "pinia";
import pinia from "../store/index";
setActivePinia(pinia);

import { useSettingsStore } from "../store/settingsStore.js";
const settings = useSettingsStore(pinia);

var spectrum = new Object();

export function initWaterfall() {
  spectrum = new Spectrum("waterfall", {
    spectrumPercent: 0,
    wf_rows: 192, //Assuming 1 row = 1 pixe1, 192 is the height of the spectrum container
  });
}

export function addDataToWaterfall(data) {
  data = JSON.parse(data);
  try {
    spectrum.addData(data);
  } catch (e) {
    //console.log(e);
  }
}
/**
 * Setwaterfall colormap array by index
 * @param {number} index colormap index to use
 */
export function setColormap(index) {
  if (isNaN(index)) index = 0;
  //console.log("Setting waterfall colormap to " + index)
  spectrum.setColorMap(index);
}

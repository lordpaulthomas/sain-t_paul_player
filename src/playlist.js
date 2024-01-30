import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "100 Per Cent",
      cover:
        "/02_bigpt_walking_4K.gif",
      artist: "Prologue",
      audio: "/100_per_cent_master.wav",
      color: ["#47609D", "#E88774"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Logic Gate",
      cover:
        "/P04_bigpt_Allabove_V01.gif",
      artist: "Prologue",
      audio: "/logic_gate_master.wav",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Irregular",
      cover:
        "/P03_bigpt_rising_V01.gif",
      artist: "Prologue",
      audio: "/irregular_master.wav",
      color: ["#EF8EA9", "#ab417f"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Breathe",
      cover:
        "/P06_bigpt_waves_V02.gif",
      artist: "Prologue",
      audio: "/breathe_master.wav",
      color: ["#CD607D", "#c94043"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Fall",
      cover:
        "/P07_bigpt_grid_V02.gif",
      artist: "Prologue",
      audio: "/fall_master.wav",
      color: ["#335561", "#3A393E"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Eureka",
      cover:
        "/P04_bigpt_Circle_V02.gif",
      artist: "Prologue",
      audio: "/eureka_master.wav",
      color: ["#2A416D", "#E98087"],
      id: uuidv4(),
      active: false,
    }

    //ADD MORE HERE
  ];
}

export default chillHop;

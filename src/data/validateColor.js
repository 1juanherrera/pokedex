const ValidateColor = (type) => {
    if(type === 'normal'){
      return "#735159";
    } else if(type === 'fighting'){
      return "#973f26";
    } else if(type === 'flying'){
      return "#48677b";
    } else if(type === 'poison'){
      return "#5b2d86";
    } else if(type === 'gound'){
      return "#a37324";
    } else if(type === 'rock'){
      return "#46180b";
    } else if(type === 'bug'){
      return "#8bc34a";
    } else if(type === 'ghost'){
      return "#31336a";
    } else if(type === 'steel'){
      return "#5d736c";
    } else if(type === 'fire'){
      return "#fb6c6c";
    } else if(type === 'water'){
      return "#70b7fa";
    } else if(type === 'grass'){
      return "#48d0b0";
    } else if(type === 'electric'){
      return "#e2e02d";
    } else if(type === 'phychic'){
      return "#a12b6a";
    } else if(type === 'ice'){
      return "#86d2f4";
    } else if(type === 'dragon'){
      return "#448a94";
    } else if(type === 'dark'){
      return "#030706";
    } else if(type === 'fairy'){
      return "#981844";
    } else if(type === 'shadow'){
      return "#000000";
    } else {
      return "#ffeb3b";
    }
}

export default ValidateColor
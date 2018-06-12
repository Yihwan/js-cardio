const timeNodes = [...document.querySelectorAll('[data-time]')];

const seconds = timeNodes
                  .map(node => node.dataset.time)
                  .map(timeCode => {
                    const [mins, secs] = timeCode.split(':');
                    return (parseInt(mins) * 60) + parseInt(secs);
                  });

const adder = (accumulator, currentValue) => {
  return accumulator + currentValue;
};

const totalSeconds = seconds.reduce(adder, 0);

console.log(totalSeconds);

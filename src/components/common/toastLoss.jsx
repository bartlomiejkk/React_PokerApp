const ToastLoss = () => {
  const index = Math.floor(Math.random() * 3);

  switch (index) {
    case 0:
      return "Unlucky!";
    case 1:
      return "We win this time.";
    case 2:
      return ":(";
    default:
      return;
  }
};

export default ToastLoss;

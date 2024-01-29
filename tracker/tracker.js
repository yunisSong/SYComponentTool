// 记录耗时时间

export default tracker = (name) => {
  let t1 = null;
  let t2 = null;
  const start = () => {
    t1 = new Date().getTime();
  };
  const end = () => {
    t2 = new Date().getTime();
    duration = t2 - t1;
    console.log(name + "流程耗时 " + duration);
  };
  return {
    start,
    end,
    duration,
  };
};

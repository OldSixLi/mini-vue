// 用于存储所有的 effect 对象
export function createDep(effects?) {
  // 进行依赖收集的存储器算是
  const dep = new Set(effects);
  return dep;
}

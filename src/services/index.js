const Profile = (function () {
  function Profile (alternatives) {
    this.count = 0
    this.alternatives = alternatives
  }
  Profile.prototype.increment = function () {
    this.count++
  }
  Profile.prototype.isZero = function () {
    return this.count === 0
  }
  return Profile
}())
function incrementProfile (n, profiles) {
  for (let _i = 0; _i < profiles.length; _i++) {
    let p = profiles[_i]
    if (p.alternatives.indexOf(n) > -1) {
      p.increment()
      break
    }
  }
}
function percent (profile) {
  return profile.count * 100 / profile.alternatives.length
}
function solve (profiles, selecteds) {
  for (let n of selecteds) {
    incrementProfile(parseInt(n), profiles)
  }
}
export const solveEstiloAprendizagem = function (selecteds) {
  let a = new Profile([3, 5, 7, 9, 13, 20, 26, 27, 35, 37, 41, 43, 46, 48, 51, 61, 67, 74, 75, 77])
  let b = new Profile([10, 16, 18, 19, 28, 31, 32, 34, 36, 39, 42, 44, 49, 55, 58, 63, 65, 69, 70, 79])
  let c = new Profile([2, 4, 6, 11, 15, 17, 21, 23, 25, 29, 33, 45, 50, 54, 60, 64, 66, 71, 78, 80])
  let d = new Profile([1, 8, 12, 14, 22, 24, 30, 38, 40, 47, 52, 53, 56, 57, 59, 62, 68, 72, 73, 76])
  let profiles = [a, b, c, d]
  solve(profiles, selecteds)
  return {ativo: percent(a), reflexivo: percent(b), teorico: percent(c), pragmatico: percent(d)}
}
export const solveEspacoVirtual = function (selecteds) {
  let a = new Profile('A', [1, 6, 11, 14, 20, 23, 32, 35, 39, 40])
  let b = new Profile('B', [2, 5, 10, 15, 19, 24, 31, 33, 34, 36])
  let c = new Profile('C', [3, 7, 9, 16, 18, 25, 27, 28, 30, 37])
  let d = new Profile('D', [4, 8, 12, 13, 17, 21, 22, 26, 29, 38])
  let profiles = [a, b, c, d]
  solve(profiles, selecteds)
  return {ativo: percent(a), reflexivo: percent(b), teorico: percent(c), pragmatico: percent(d)}
}

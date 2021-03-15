function constructionCrew(worker){
  if(worker.dizziness){
      for(let i=0;i<worker.experience;i++){
          worker['levelOfHydrated']+=0.1*worker.weight
      }
      worker.dizziness=false
  }
  return worker
}

console.log(constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }))
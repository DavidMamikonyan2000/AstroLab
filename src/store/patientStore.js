let patients = [];
let listeners = [];

export const patientStore = {
  keepPatient(newPatient) {
    if (newPatient) {
      patients.push(...newPatient);
    }
    emitChange();
  },
  subscribe(listener) {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
  getSnapshot() {
    return patients;
  },
};

function emitChange() {
  for (let listener of listeners) {
    listener();
  }
}

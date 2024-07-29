const registerSW = async () => {
  const registration = await navigator.serviceWorker.register("sw. js");
  return registration;
};

function getUrlExtname(url: string): string {
  try {
    const pathname = new URL(url).pathname;

    if (pathname.includes(".")) {
      return (pathname.split(".").pop() as string).toLowerCase();
    }
  } catch (e) {
    console.error(e);
  }

  return "";
}

export default getUrlExtname;

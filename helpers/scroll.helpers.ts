export function scrollToElement(elementId: string): void {
  if (typeof window === "undefined") return;
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

export const onSmooth = (id: string, indentation: number) => {
    const targetElement = document.getElementById(id);

    if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;

        setTimeout(function () {
            window.scrollTo({
                top: elementPosition - indentation,
                behavior: 'smooth'
            })
        }, 0);
    }
}
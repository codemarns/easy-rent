export const headerStyles = {
  root: {
    base: "sticky top-0 z-10 h-20 w-full px-8 backdrop-blur-md bg-white/75",
    container: {
      base: "h-full w-full max-w-[1440px] mx-auto flex items-center justify-between",
      logo: {
        base: ""
      },
      nav: {
        base: "h-full w-auto",
        ul: {
          base: "h-full w-auto flex items-center gap-2",
          li: {
            base: "h-full w-auto",
            link: {
              base: "h-full w-auto px-6 inline-flex items-center justify-center transition-all",
              active: "text-warning",
              inactive: "hover:text-warning",
            }
          }
        }
      }
    },
  },
};

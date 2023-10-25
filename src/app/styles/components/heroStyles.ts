export const heroStyles = {
  root: {
    base: "!h-[810px] bg-warning bg-no-repeat bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:backdrop-blur-md before:bg-white/50",
  },
  container: {
    base: "!h-full grid grid-cols-2 gap-16",
  },
  column: {
    details: {
      base: "flex items-center",
      inner: {
        base: "space-y-12",
        title: {
          base: "space-y-4 font-bold text-left tracking-wide",
          first_line: "block text-3xl",
          last_line: "block text-5xl",
        },
        message: {
          base: "text-xl",
        },
        cta: {
          base: "hover:gap-4",
        },
      },
    },
    image: {
      base: "relative bg-warning-400 rounded-xl bg-no-repeat bg-cover bg-center",
      image_owner: {
        base: "absolute bottom-1 right-1 text-white/10",
      },
    },
    order: {
      1: "order-1",
      2: "order-2",
    },
  },
};

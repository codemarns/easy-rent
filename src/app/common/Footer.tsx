import { Icon, IconFont } from "../components";

export const Footer = () => {
  return (
    <section
      id="footer-section"
      className="h-auto w-full max-w-[1920px] mx-auto px-8 pt-[14rem] pb-8 bg-warning text-warning-200"
    >
      <div className="h-auto w-full max-w-[1440px] mx-auto space-y-8">
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(225px,_1fr))] gap-x-8 gap-y-12">
          <div className="flex flex-col space-y-4">
            <span className="text-white">Socia Media</span>
            <hr className="border-warning-400" />
            <div className="flex items-center gap-2">
              <IconFont name="facebook" />
              <a target="_blank" href="https://www.facebook.com/codemarns">
                Facebook
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IconFont name="youtube-play" />
              <a target="_blank" href="https://www.youtube.com/@codemarns">
                Youtube
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IconFont name="github" />
              <a target="_blank" href="https://github.com/codemarns">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IconFont name="linkedin" />
              <a
                target="_blank"
                href="https://www.linkedin.com/in/marnien-cueba-96a419200/"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-white">Websites</span>
            <hr className="border-warning-400" />
            <div className="flex items-center gap-2">
              <IconFont name="link" />
              <a target="_blank" href="https://codemarns.github.io/portfolio/">
                Portfolio
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IconFont name="link" />
              <a target="_blank" href="https://codemarns.github.io/tutorials/">
                Tutorials
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-white">Designs</span>
            <hr className="border-warning-400" />
            <div className="flex items-center gap-2">
              <IconFont name="link" />
              <a
                target="_blank"
                href="https://www.figma.com/proto/QYqFJz2e7KFen1PcVeqpoU/Components?type=design&node-id=14-7&t=lq20MpElYdu7JaDa-0&scaling=min-zoom&page-id=0%3A1"
              >
                Figma - Component Designs
              </a>
            </div>
            <div className="flex items-center gap-2">
              <IconFont name="link" />
              <a
                target="_blank"
                href="https://www.figma.com/proto/oM4EMt1DOb6t9iJQt8wRTX/Smartsourcing-Case-Study?type=design&node-id=1-2&t=QpYtQqbhkkEH1hHY-0&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A2"
              >
                Figma - Case Study
              </a>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-white">About the Author</span>
            <hr className="border-warning-400" />
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <span className="select-none">Marnien Cueba</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
              <span className="select-none">+63 922 422 6708</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
              <span className="select-none">marniencueba94@gmail.com</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path={[
                  "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z",
                  "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
                ]}
              />
              <span className="select-none">
                Consolacion, Cebu 6001 Philippines
              </span>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <span className="text-white">Social Media Content Purposes</span>
            <hr className="border-warning-400" />
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <span className="select-none">codemarns</span>
            </div>
            <div className="flex items-start gap-2">
              <Icon
                className="text-warning-200"
                path="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
              <span className="select-none">codemarns@gmail.com</span>
            </div>
          </div>
        </div>

        <div className="border-t border-warning-400 pt-8 flex items-center justify-center">
          <span>Powered by Easy Rent.</span>
        </div>
      </div>
    </section>
  );
};

import {
  ProjectDropdownItemProps,
  ProjectDropdownProps,
} from "@/@types/provider";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectDropdownItem = (props: ProjectDropdownItemProps) => {
  return (
    <>
      {props.blocked ? (
        <span
          role="menuitem"
          tabIndex={-1}
          className="flex w-full px-4 py-2 gap-2 text-sm leading-5 text-left text-gray-700 cursor-not-allowed opacity-50"
          aria-disabled="true"
        >
          {props.icon}
          {props.title}
        </span>
      ) : (
        <a
          href={props.url}
          target="_blank"
          className="text-gray-700 flex w-full px-4 py-2 gap-2 text-sm leading-5 text-left"
          role="menuitem"
        >
          {props.icon}
          {props.title}
        </a>
      )}
    </>
  );
};

export default function ProjectDropdown(props: ProjectDropdownProps) {
  return (
    <>
      <div className=" relative inline-block text-left dropdown">
        <span className="rounded-md">
          <button
            className="inline-flex justify-center w-full px-4 py-2 text-sm transition duration-150 ease-in-out hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50"
            type="button"
            aria-haspopup="true"
            aria-expanded="true"
            aria-controls="headlessui-menu-items-117"
          >
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </span>
        <div className="hidden dropdown-menu">
          <div
            className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
            aria-labelledby="headlessui-menu-button-1"
            id="headlessui-menu-items-117"
            role="menu"
          >
            <div className="py-1">
              <ProjectDropdownItem
                url={props.site.url}
                blocked={props.site.blocked}
                title={"Site"}
                icon={<FaExternalLinkAlt size={20} />}
              />

              <ProjectDropdownItem
                url={props.github.url}
                blocked={props.github.blocked}
                title={"GitHub"}
                icon={<FaGithub size={20} />}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const TabsRegister = ({ step }) => {
  return (
    <div className="lg:border-b lg:border-t lg:border-gray-200">
      <nav className="mx-auto max-w-7xl" aria-label="Progress">
        <ol
          role="list"
          className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-gray-200"
        >
          <li className="relative overflow-hidden lg:flex-1">
            <div className="overflow-hidden border border-gray-200 rounded-t-md border-b-0 lg:border-0">
              {/* <!-- Completed Step --> */}
              <a href="#" aria-current="step">
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${
                    step === 1 ? "bg-main-color" : "bg-transparent"
                  } lg:bottom-0 lg:top-auto lg:h-1 lg:w-full`}
                  aria-hidden="true"
                ></span>
                <span className="flex items-start px-6 py-5 text-sm font-medium">
                  {step > 1 ? (
                    <span class="flex-shrink-0">
                      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-main-color">
                        <svg
                          class="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  ) : (
                    <span className="flex-shrink-0">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          step === 1 ? "border-main-color" : "border-gray-300"
                        }`}
                      >
                        <span className={step === 1 ? "text-main-color" : ""}>
                          01
                        </span>
                      </span>
                    </span>
                  )}

                  <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                    <span
                      className={`text-sm font-medium ${
                        step === 1 ? "text-main-color" : "text-gray-500"
                      }`}
                    >
                      Step 01
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      Confirm Information
                    </span>
                  </span>
                </span>
              </a>
            </div>
          </li>
          <li className="relative overflow-hidden lg:flex-1">
            <div className="overflow-hidden border border-gray-200 lg:border-0">
              {/* <!-- Current Step --> */}
              <a href="#" className="group">
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${
                    step === 2 ? "bg-main-color" : "bg-transparent"
                  } lg:bottom-0 lg:top-auto lg:h-1 lg:w-full`}
                  aria-hidden="true"
                ></span>
                <span className="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
                  {step > 2 ? (
                    <span class="flex-shrink-0">
                      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-main-color">
                        <svg
                          class="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  ) : (
                    <span className="flex-shrink-0">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          step === 2 ? "border-main-color" : "border-gray-300"
                        }`}
                      >
                        <span className={step === 2 ? "text-main-color" : ""}>
                          02
                        </span>
                      </span>
                    </span>
                  )}
                  <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                    <span
                      className={`text-sm font-medium ${
                        step === 2 ? "text-main-color" : "text-gray-500"
                      }`}
                    >
                      Step 02
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      Lucky Number
                    </span>
                  </span>
                </span>
              </a>
              {/* <!-- Separator --> */}
              <div
                className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="h-full w-full text-gray-300"
                  viewBox="0 0 12 82"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0V31L10.5 41L0.5 51V82"
                    stroke="currentcolor"
                    vector-effect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </li>
          <li className="relative overflow-hidden lg:flex-1">
            <div className="overflow-hidden border border-gray-200 rounded-b-md border-t-0 lg:border-0">
              {/* <!-- Upcoming Step --> */}
              <a href="#" className="group">
                <span
                  className={`absolute left-0 top-0 h-full w-1 ${
                    step === 3 ? "bg-main-color" : "bg-transparent"
                  } lg:bottom-0 lg:top-auto lg:h-1 lg:w-full`}
                  aria-hidden="true"
                ></span>
                <span className="flex items-start px-6 py-5 text-sm font-medium lg:pl-9">
                  {step > 3 ? (
                    <span class="flex-shrink-0">
                      <span class="flex h-10 w-10 items-center justify-center rounded-full bg-main-color">
                        <svg
                          class="h-6 w-6 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </span>
                    </span>
                  ) : (
                    <span className="flex-shrink-0">
                      <span
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 ${
                          step === 3 ? "border-main-color" : "border-gray-300"
                        }`}
                      >
                        <span className={step === 3 ? "text-main-color" : ""}>
                          03
                        </span>
                      </span>
                    </span>
                  )}
                  <span className="ml-4 mt-0.5 flex min-w-0 flex-col">
                    <span
                      className={`text-sm font-medium ${
                        step === 3 ? "text-main-color" : "text-gray-500"
                      }`}
                    >
                      Step 03
                    </span>
                    <span className="text-sm font-medium text-gray-500">
                      Participants
                    </span>
                  </span>
                </span>
              </a>
              {/* <!-- Separator --> */}
              <div
                className="absolute inset-0 left-0 top-0 hidden w-3 lg:block"
                aria-hidden="true"
              >
                <svg
                  className="h-full w-full text-gray-300"
                  viewBox="0 0 12 82"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0.5 0V31L10.5 41L0.5 51V82"
                    stroke="currentcolor"
                    vector-effect="non-scaling-stroke"
                  />
                </svg>
              </div>
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

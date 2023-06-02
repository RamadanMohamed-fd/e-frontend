import React from 'react';
import { RiTruckLine } from 'react-icons/ri';
import { AiOutlineClockCircle, AiFillCreditCard } from 'react-icons/ai';

import { AiOutlineSafetyCertificate } from 'react-icons/ai';
import Section from './Section';
const Service = () => {
  return (
    <div className=" bg-white  ">
      <div className="flex items-center flex-wrap justify-evenly sm:w-[85%] max-sm:w-[100%] m-auto  bg-white border-y-2 py-8 ">
        <Section title="Certified Authentic items" sub="CraftIndika ">
          <AiOutlineSafetyCertificate />
        </Section>
        <Section title="And Secure Shipping " sub="Fastest">
          <svg
            width="60px"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -117 679.99892 679"
          >
            <path
              d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"
              fill="#ff4c3b"
            ></path>
          </svg>
        </Section>
        <Section title="Money Back Guarantee" sub="7 Days">
          <svg
            width="60px"
            height="60px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -14 512.00001 512"
          >
            <path
              d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"
              fill="#ff4c3b"
            ></path>
            <path
              d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"
              fill="#ff4c3b"
            ></path>
            <path
              d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"
              fill="#ff4c3b"
            ></path>
            <path
              d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"
              fill="#ff4c3b"
            ></path>
            <path
              d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"
              fill="#ff4c3b"
            ></path>
            <path
              d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"
              fill="#ff4c3b"
            ></path>
          </svg>
        </Section>
        <Section title="Dedicated Support " sub="24 X 7">
          <svg
            width="60px"
            height="60px"
            enableBackground="new 0 0 480 480"
            version="1.1"
            viewBox="0 0 480 480"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g fill="#ff4c3b">
              <path d="m472 432h-24v-152c-3e-3 -4.418-3.588-7.997-8.006-7.994-2.607 2e-3 -5.05 1.274-6.546 3.41l-112 160c-2.532 3.621-1.649 8.609 1.972 11.14 1.343 0.939 2.941 1.443 4.58 1.444h104v24c0 4.418 3.582 8 8 8s8-3.582 8-8v-24h24c4.418 0 8-3.582 8-8s-3.582-8-8-8zm-40 0h-88.64l88.64-126.62v126.62z" />
              <path d="m328 464h-94.712l88.056-103.69c0.2-0.238 0.387-0.486 0.56-0.744 16.566-24.518 11.048-57.713-12.56-75.552-28.705-20.625-68.695-14.074-89.319 14.631-7.821 10.885-12.027 23.95-12.025 37.353 0 4.418 3.582 8 8 8s8-3.582 8-8c-3e-3 -26.51 21.486-48.002 47.995-48.005 10.048-1e-3 19.843 3.151 28.005 9.013 16.537 12.671 20.388 36.007 8.8 53.32l-98.896 116.5c-2.859 3.369-2.445 8.417 0.924 11.276 1.445 1.226 3.277 1.899 5.172 1.9h112c4.418 0 8-3.582 8-8s-3.582-8-8-8z" />
              <path d="m216.18 424.15c0.167-4.415-3.278-8.129-7.693-8.296h-3e-3c-104.37-3.874-188.14-87.493-192.2-191.86h31.72c4.418 0 8-3.582 8-8s-3.582-8-8-8h-31.72c4.003-104.18 87.54-187.71 191.72-191.71v23.712c0 4.418 3.582 8 8 8s8-3.582 8-8v-23.712c102.75 3.974 185.69 85.34 191.62 188l-31.2-31.2c-3.178-3.07-8.242-2.982-11.312 0.196-2.994 3.1-2.994 8.015 0 11.116l44.656 44.656c0.841 1.018 1.925 1.807 3.152 2.296 0.313 0.094 0.631 0.172 0.952 0.232 0.549 0.198 1.117 0.335 1.696 0.408h0.232 0.224c0.609-0.046 1.211-0.164 1.792-0.352 0.329-0.04 0.655-0.101 0.976-0.184 1.083-0.385 2.069-1.002 2.888-1.808l45.264-45.248c3.069-3.178 2.982-8.242-0.196-11.312-3.1-2.994-8.015-2.994-11.116 0l-31.976 31.952c-5.715-114.67-100.27-204.76-215.08-204.93-0.2-8e-3 -0.368-0.112-0.568-0.112s-0.368 0.104-0.568 0.112c-118.85 0.163-215.16 96.47-215.32 215.32 0 0.2-0.112 0.368-0.112 0.568s0.104 0.368 0.112 0.568c0.199 115.92 91.939 210.97 207.78 215.28h0.296c4.299-1e-3 7.829-3.4 7.992-7.696z" />
              <path d="m323.48 108.52c-3.124-3.123-8.188-3.123-11.312 0l-85.968 85.96c-6.495-2.896-13.914-2.896-20.408 0l-40.704-40.704c-3.178-3.069-8.243-2.981-11.312 0.197-2.994 3.1-2.994 8.015 0 11.115l40.624 40.624c-5.704 11.94-0.648 26.244 11.293 31.947 9.165 4.378 20.095 2.501 27.275-4.683 7.219-7.158 9.078-18.118 4.624-27.256l85.888-85.888c3.123-3.124 3.123-8.188 0-11.312zm-101.82 113.13-2e-3 2e-3c-3.164 3.025-8.148 3.025-11.312 0-3.125-3.124-3.125-8.189-2e-3 -11.314 3.124-3.125 8.189-3.125 11.314-2e-3 3.125 3.124 3.125 8.19 2e-3 11.314z" />
            </g>
          </svg>
        </Section>
      </div>
    </div>
  );
};

export default Service;

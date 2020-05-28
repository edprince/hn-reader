import React from 'react';
import Moment from "moment";
import "./App.css";

function Story(props) {
  return (
    <div className="list-hover md:w-1/2 sm:w-full w-auto m-auto bg-white shadow overflow-hidden">
      <a href={props.story.url}>
        <div className="flex">
          <div className="">
            <div className="pl-4 pr-4 pt-4 pb-4 py-5 border-b border-gray-200 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                    {props.story.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm leading-5 text-gray-500 pb-2">
                  by {props.story.by} 
                </p>
                <span className="text-sm text-gray-500 rounded-full pr-2 pl-2" >
                  <span className="mr-1">
                    <span className="lnr lnr-thumbs-up mr-2"></span>
                  </span>
                  {props.story.score}
                </span>
                <span className="text-sm text-gray-500 ml-2" >
                  <span className="lnr lnr-bubble mr-2"></span>{props.story.descendants}
                </span>
            </div>
          </div>
        </div>
        </a>
    </div>
  );
}

export default Story;
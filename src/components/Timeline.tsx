import tw from 'tailwind-styled-components'
import React from "react";
import {experienceTimelineItems} from "../config/experience";

// Timeline component from here: https://flowbite.com/docs/components/timeline/
const TimelineContainer = tw.div`flex items-center md:pl-12 pt-12 md:pt-0`
const TimelineOrderedList = tw.ol`relative border-l border-gray-200 dark:border-gray-700`
const TimelineListItem = tw.li`mb-10 ml-4 border border-slate-300 rounded-lg p-2 border-2 hover:bg-green-100 hover:scale-105 transition duration-300 ease-in-out`
const TimelineDot = tw.div`absolute w-3 h-3 bg-gray-200 rounded-full -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700`
const Time = tw.time`mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 p-2`
const EventHeaderText = tw.h3`text-lg font-semibold text-emerald-500 dark:text-white p-2`
const EventHeaderDescription = tw.p`mb-4 text-base font-normal text-gray-500 dark:text-gray-400 p-2`

type EventLinkButtonProps = {
    location: string
    label: string
}

const EventLinkButton = ({location, label}: EventLinkButtonProps): JSX.Element => {
    const EventLinkButtonWrapper = tw.a`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-emerald-500 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700`
    return (
        <EventLinkButtonWrapper href={location} target="_blank">
            {label}
            <svg className="ml-2 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                />
            </svg>
        </EventLinkButtonWrapper>
    )
}

type TimelineItemProps = {
    item: TimelineItemType
}

export type TimelineItemType = {
    date: string
    title: string
    employer?: string
    description: string
    linkLocation?: string
    linkLabel?: string
    iconFilename?: string
}

const TimelineItem = ({item}: TimelineItemProps): JSX.Element => {
    return (
        <TimelineListItem>
            <TimelineDot/>
            <Time>{item.date}</Time>
            <EventHeaderText>{item.title} &bull; {item.employer}</EventHeaderText>
            <EventHeaderDescription>{item.description}</EventHeaderDescription>
            <div className="flex-col flex md:flex-row justify-center md:justify-start items-center  text-center p-2 pb-6">
                <img className="h-24 mx-auto md:mx-0 pb-4 md:pb-0 md:p-2" src={`/images/${item.iconFilename}`} alt='Vehikl logo'/>
                <span className="text-6xl text-slate-300 hidden md:block md:mb-2 md:mr-2">&bull;</span>
                {item.linkLocation && item.linkLabel &&
                <EventLinkButton location={item.linkLocation} label={item.linkLabel}/>
                }
            </div>
        </TimelineListItem>
    )
}

const Timeline = (): JSX.Element => {
    return (
        <TimelineContainer>
            <TimelineOrderedList>
                {experienceTimelineItems.map(item => <TimelineItem item={item}/>)}
            </TimelineOrderedList>
        </TimelineContainer>
    )
}

export default React.memo(Timeline)
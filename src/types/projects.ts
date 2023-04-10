export interface Image {
    id: number;
    src: string;
} 

export interface Project {
    textId: string;
    url: string;
    name: string;
    header: string;
    description: string;
}

export interface ProjectImage {
    id: string;
    name: string;
    imgSrc: any,
    altName: string
}

export type MobileProject = Project & ProjectImage;
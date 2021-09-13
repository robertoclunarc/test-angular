export interface actor {   
    name?: string,
	height?: number,
	mass?: number,
	hair_color?: string,
	skin_color?: string,
	eye_color?: string,
	birth_year?: number,
	gender?: string,
	homeworld?: string,
	films?: string [],
	species?: string[],
	vehicles?: string[],
	starships?: string[],
	created?: string,
	edited?: string,
	url?: string
}

export interface people {
    count?: any,
    next?: any,
    previous?: any,
    results?: actor[],
}
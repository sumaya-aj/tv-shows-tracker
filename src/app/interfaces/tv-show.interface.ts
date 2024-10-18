export interface TvShow {
    id:                   number;
    name:                 string;
    permalink:            string;
    start_date:           string;
    end_date:             null | string;
    country:              string;
    network:              string;
    status:               "Canceled/Ended" | "Ended";
    image_thumbnail_path: string;
}
export interface Mission {
  flight_number: number;
  mission_name: string;
  mission_id: string[];
  launch_year: string;
  launch_success: boolean;
  launch_site: {
    site_name: string;
    site_name_long: string;
  };
  rocket: {
    rocket_name: string;
    rocket_type: string;
    first_stage: {
      cores: {
        land_success: boolean;
      }[];
    };
  };
  details: string;
  links: {
    mission_patch: string;
    mission_patch_small: string;
    article_link: string;
    wikipedia: string;
    video_link: string;
  };
}

export const Engagement_Host_URI = "https://fxojmluid9.execute-api.ap-south-1.amazonaws.com/Prod/api";
export const Gameplay_Host_URI = "https://m28mjnsyp8.execute-api.ap-south-1.amazonaws.com/Prod/api";
export const Reporting_Host_URI = "https://wehmutx1th.execute-api.ap-south-1.amazonaws.com/Prod/api";

export const gameAssetsPath = "http://185.151.51.83:8081/ga/";

export const headers = {
    client_id: 'identity_mgt_tenant_2',//'client_1_engagement', //
    secret: 'XsrRvPkMHmXkkFeW'
}

export const USER_BY_FILTERS = "/idty/userbyfilter";
export const INVITE_USER = "/idty/admin/inviteuser";
export const UPDATE_USER = "/idty/updateuser";
export const DELETE_USER = "/idty/deleteuser";
export const GROUP_ADDEDIT = "/idty/groupaddedit";
export const DELETE_GROUP = "/idty/deletegroup";
export const GROUP_ALL = "/idty/group/all";
export const PERMISSION_ALL = "/idty/permission/all";
export const ADD_USER_TO_GROUP = "/idty/addusertogroup";
export const REMOVE_USER_TO_GROUP = "/idty/removeusertogroup";
export const USER_BY_USERNAME = "/idty/userbyusername";
export const GET_GROUPS = "/idty/getgroups";
export const ADD_NEWGROUP = "/idty/addnewgroup";
export const GROUP_BY_GROUPNAME = "/idty/groupbygroupname";

export const ENGAGEMENTS_BY_FILTERS = "/engt/engagementbyfilters";
export const CUSTOMERS_BY_FILTERS = "/engt/customersbyfilters";
export const REWARD_BY_FILTERS = "/engt/rewardbyfilters";
export const REWARD_TYPES = "/engt/rewardtypes";
export const REWARDS = "/engt/rewards";
export const JOURNEY_BY_FILTERS = "/engt/journeybyfilters";
export const SAVE_ENGAGEMENT = "/engt/saveengagement";
export const DELETE_ENGAGEMENT = "/engt/deleteengagement?engagement_id=";
export const UPDATE_ENGAGEMENT_STATUS = "/engt/updateengagementstatus";
export const ENGAGEMENTS_BY_STATUS = "/engt/engagementsbystatus";
export const ENGAGEMENTS_BY_ID = '/engt/engagementbyid?engagement_id=';
export const ENGAGEMENTS_DETAILS_BY_ID = '/engt/engagementdetailsbyid?engagement_id=';
export const ENGAGEMENT_UPDATE_STATUS = '/engt/updateengagementstatus';
export const ENGAGEMENT_BY_STATUS_ID = '/engt/engagementsbystatus?engagement_status_id=';
export const PLAYER_REWARD_HISTORY = '/engt/playerRewardsHistory';
export const ACTIVE_ENGAGEMENTS = '/engt/activeengagements';
export const ENGAGEMENT_DETAILS_FOR_PLAYER = '/engt/engagementdetailsforplayer';
export const CUSTOMER_SAVINGS = '/engt/customersavings?fetchLastX=';

export const PLAYER_SUMMARY = '/rept/playersummary';

export const GAME_LAUNCH = '/game/gameLaunch';
export const GAME_EXIT = '/game/gameExit';
export const PLAYER_POINTS_BALANCE = '/game/getPlayerPointsBalance?fetchLastX=';
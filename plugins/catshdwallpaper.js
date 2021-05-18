/*Codded by @WH173-5P1D3R
Telegram: https://t.me/WH173_5P1D3R
WhatsApp: https://wa.me/+917736807522 
Instagram: https://instagram.com/wh173_5p1d3r_official
*/

const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({ pattern: 'catwallpaper', fromMe: true, desc: Lang.WP }, (async(message, match) => {

        var r_text = new Array();

        r_text[0] = "https://images.wallpaperscraft.com/image/cat_down_paw_51653_300x168.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/cat_down_playful_57703_300x168.jpg";
        r_text[2] = "https://images.wallpaperscraft.com/image/cat_night_lights_74375_300x168.jpg";
        r_text[3] = "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_300x168.jpg";
        r_text[4] = "https://images.wallpaperscraft.com/image/cat_computer_curiosity_56487_300x168.jpg";
        r_text[5] = "https://images.wallpaperscraft.com/image/cat_sit_glare_85388_300x168.jpg";
        r_text[6] = "https://images.wallpaperscraft.com/image/cat_paw_british_115221_300x168.jpg";
        r_text[7] = "https://images.wallpaperscraft.com/image/cat_muzzle_profile_119212_300x168.jpg";
        r_text[8] = "https://images.wallpaperscraft.com/image/cat_spotted_color_84170_300x168.jpg";
        r_text[9] = "https://images.wallpaperscraft.com/image/cat_face_window_105885_300x168.jpg";
        r_text[10] = "https://images.wallpaperscraft.com/image/cat_pleased_muzzle_117663_300x168.jpg";
        r_text[11] = "https://images.wallpaperscraft.com/image/cat_white_eyes_89254_300x168.jpg";
        r_text[12] = "https://images.wallpaperscraft.com/image/cat_paws_furry_113514_300x168.jpg";
        r_text[13] = "https://images.wallpaperscraft.com/image/kitten_cat_spotted_114818_300x168.jpg";
        r_text[14] = "https://images.wallpaperscraft.com/image/monkey_cat_friends_85409_300x168.jpg";
        r_text[15] = "https://images.wallpaperscraft.com/image/dog_cat_arrow_85141_300x168.jpg";
        r_text[16] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_119000_300x168.jpg";
        r_text[17] = "https://images.wallpaperscraft.com/image/cat_face_eyes_107098_300x168.jpg";
        r_text[18] = "https://images.wallpaperscraft.com/image/cat_fluffy_view_104023_300x168.jpg";
        r_text[19] = "https://images.wallpaperscraft.com/image/cat_box_climb_89269_300x168.jpg";
        r_text[20] = "https://images.wallpaperscraft.com/image/cat_dance_music_57232_300x168.jpg";
        r_text[21] = "https://images.wallpaperscraft.com/image/cat_aquarium_fish_89362_300x168.jpg";
        r_text[22] = "https://images.wallpaperscraft.com/image/cat_face_spotted_106097_300x168.jpg";
        r_text[23] = "https://images.wallpaperscraft.com/image/cat_fat_fluffy_89298_300x168.jpg";
        r_text[24] = "https://images.wallpaperscraft.com/image/cat_fluffy_look_94807_300x168.jpg";
        r_text[25] = "https://images.wallpaperscraft.com/image/kitten_cat_selfie_125757_300x168.jpg";
        r_text[26] = "https://images.wallpaperscraft.com/image/cat_suitcase_antiques_111415_300x168.jpg";
        r_text[27] = "https://images.wallpaperscraft.com/image/cat_fat_lie_89245_300x168.jpg";
        r_text[28] = "https://images.wallpaperscraft.com/image/cat_cute_fluffy_167842_300x168.jpg";
        r_text[29] = "https://images.wallpaperscraft.com/image/cat_autumn_street_117923_300x168.jpg";
        r_text[30] = "https://images.wallpaperscraft.com/image/cat_face_look_out_57910_300x168.jpg";
        r_text[31] = "https://images.wallpaperscraft.com/image/cat_profile_dark_166877_300x168.jpg";
        r_text[32] = "https://images.wallpaperscraft.com/image/cat_spotted_blur_105356_300x168.jpg";
        r_text[33] = "https://images.wallpaperscraft.com/image/cat_black_face_89492_300x168.jpg";
        r_text[34] = "https://images.wallpaperscraft.com/image/cat_spotty_lies_117869_300x168.jpg";
        r_text[35] = "https://images.wallpaperscraft.com/image/cat_discontent_indignation_116779_300x168.jpg";
        r_text[36] = "https://images.wallpaperscraft.com/image/cat_furry_sitting_114718_300x168.jpg";
        r_text[37] = "https://images.wallpaperscraft.com/image/cats_couple_lie_112877_300x168.jpg";
        r_text[38] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_73759_300x168.jpg";
        r_text[40] = "https://images.wallpaperscraft.com/image/cat_fat_look_72684_300x168.jpg";
        r_text[41] = "https://images.wallpaperscraft.com/image/cat_sphinx_shadow_56219_300x168.jpg";
        r_text[42] = "https://images.wallpaperscraft.com/image/cat_sphynx_lie_72093_300x168.jpg";
        r_text[43] = "https://images.wallpaperscraft.com/image/cat_silhouette_blue_87249_300x168.jpg";
        r_text[44] = "https://images.wallpaperscraft.com/image/cat_lynx_face_166909_300x168.jpg";
        r_text[45] = "https://images.wallpaperscraft.com/image/cat_playful_grass_117217_300x168.jpg";
        r_text[46] = "https://images.wallpaperscraft.com/image/cat_muzzle_spotted_114064_300x168.jpg";
        r_text[47] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_107907_300x168.jpg";
        r_text[48] = "https://images.wallpaperscraft.com/image/cat_cute_grass_165263_300x168.jpg";
        r_text[49] = "https://images.wallpaperscraft.com/image/cat_muzzle_tie_116315_300x168.jpg";
        r_text[50] = "https://images.wallpaperscraft.com/image/cat_aggression_funny_104357_300x168.jpg";
        r_text[51] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_78517_300x168.jpg";
        r_text[52] = "https://images.wallpaperscraft.com/image/cat_fright_look_72646_300x168.jpg";
        r_text[53] = "https://images.wallpaperscraft.com/image/cat_rocks_jump_71901_300x168.jpg";
        r_text[54] = "https://images.wallpaperscraft.com/image/cat_face_eyes_57754_300x168.jpg";
        r_text[55] = "https://images.wallpaperscraft.com/image/toys_cats_rabbits_73677_300x168.jpg";
        r_text[56] = "https://images.wallpaperscraft.com/image/cat_furry_book_66511_300x168.jpg";
        r_text[57] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56632_300x168.jpg";
        r_text[58] = "https://images.wallpaperscraft.com/image/cat_lies_gray_114124_300x168.jpg";
        r_text[59] = "https://images.wallpaperscraft.com/image/cat_sit_hide_83101_300x168.jpg";
        r_text[60] = "https://images.wallpaperscraft.com/image/cat_color_ladder_29394_300x168.jpg";
        r_text[61] = "https://images.wallpaperscraft.com/image/cat_fluffy_box_66380_300x168.jpg";
        r_text[62] = "https://images.wallpaperscraft.com/image/cat_furry_look_72725_300x168.jpg";
        r_text[63] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56402_300x168.jpg";
        r_text[64] = "https://images.wallpaperscraft.com/image/cat_muzzle_yawn_117777_300x168.jpg";
        r_text[65] = "https://images.wallpaperscraft.com/image/cat_furry_muzzle_114111_300x168.jpg";
        r_text[66] = "https://images.wallpaperscraft.com/image/cat_fluffy_walk_113818_300x168.jpg";
        r_text[67] = "https://images.wallpaperscraft.com/image/cat_stairs_lie_89497_300x168.jpg";
        r_text[68] = "https://images.wallpaperscraft.com/image/cat_door_background_72708_300x168.jpg";
        r_text[69] = "https://images.wallpaperscraft.com/image/cat_book_glasses_71986_300x168.jpg";
        r_text[70] = "https://images.wallpaperscraft.com/image/cat_muzzle_gray_112923_300x168.jpg";
        r_text[71] = "https://images.wallpaperscraft.com/image/cat_tabby_walk_112844_300x168.jpg";
        r_text[72] = "https://images.wallpaperscraft.com/image/cat_lick_fluffy_109400_300x168.jpg";
        r_text[73] = "https://images.wallpaperscraft.com/image/cat_nature_autumn_72723_300x168.jpg";
        r_text[74] = "https://images.wallpaperscraft.com/image/cat_tabby_stand_56508_300x168.jpg";
        r_text[75] = "https://images.wallpaperscraft.com/image/cat_sofa_lies_115717_300x168.jpg";
        r_text[76] = "https://images.wallpaperscraft.com/image/cat_lies_street_113899_300x168.jpg";
        r_text[77] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_83251_300x168.jpg";
        r_text[78] = "https://images.wallpaperscraft.com/image/cat_treasure_toy_72647_300x168.jpg";
        r_text[79] = "https://images.wallpaperscraft.com/image/cats_kittens_greens_72718_300x168.jpg";
        r_text[80] = "https://images.wallpaperscraft.com/image/cat_fluffy_ladder_113866_300x168.jpg";
        r_text[81] = "https://images.wallpaperscraft.com/image/cats_sleep_collars_72696_300x168.jpg";
        r_text[82] = "https://images.wallpaperscraft.com/image/cat_fence_walk_56514_300x168.jpg";
        r_text[83] = "https://images.wallpaperscraft.com/image/cat_playful_jump_59770_300x168.jpg";
        r_text[84] = "https://images.wallpaperscraft.com/image/cat_pumpkin_background_56710_300x168.jpg";
        r_text[85] = "https://images.wallpaperscraft.com/image/cat_furry_look_57783_300x168.jpg";
        r_text[86] = "https://images.wallpaperscraft.com/image/cats_fat_lie_71748_300x168.jpg";
        r_text[87] = "https://images.wallpaperscraft.com/image/cat_spotted_eyes_56641_300x168.jpg";
        r_text[88] = "https://images.wallpaperscraft.com/image/cat_holiday_grass_72724_300x168.jpg";
        r_text[89] = "https://images.wallpaperscraft.com/image/cat_face_lie_56701_300x168.jpg";
        r_text[90] = "https://images.wallpaperscraft.com/image/cat_eyes_boards_72636_300x168.jpg";
        r_text[91] = "https://images.wallpaperscraft.com/image/cat_paws_blurring_59315_300x168.jpg";
        r_text[92] = "https://images.wallpaperscraft.com/image/cat_muzzle_grass_56611_300x168.jpg";
        r_text[93] = "https://images.wallpaperscraft.com/image/cat_muzzle_collar_56337_300x168.jpg";
        r_text[94] = "https://images.wallpaperscraft.com/image/cat_eyes_face_56745_300x168.jpg";
        r_text[95] = "https://images.wallpaperscraft.com/image/cat_yawn_muzzle_56072_300x168.jpg";
        r_text[96] = "https://images.wallpaperscraft.com/image/bengal_cat_cat_spotted_105785_300x168.jpg";
        r_text[97] = "https://images.wallpaperscraft.com/image/abyssinian_cat_cat_face_105986_300x168.jpg";
        r_text[98] = "https://images.wallpaperscraft.com/image/cat_drawing_table_74931_300x168.jpg";
        r_text[99] = "https://images.wallpaperscraft.com/image/cat_british_eye_26816_300x168.jpg";
        r_text[100] = "https://images.wallpaperscraft.com/image/cat_fluffy_flowers_104552_300x168.jpg";
        r_text[101] = "https://images.wallpaperscraft.com/image/cat_scream_emotion_113359_300x168.jpg";
        r_text[102] = "https://images.wallpaperscraft.com/image/cat_licking_muzzle_113333_300x168.jpg";
        r_text[103] = "https://images.wallpaperscraft.com/image/cat_furry_photo_shoot_89417_300x168.jpg";
        r_text[104] = "https://images.wallpaperscraft.com/image/cat_collar_down_wash_57690_300x168.jpg";
        var i = Math.floor(621 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by W5-BOT' })

    }));
} else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({ pattern: 'catwallpaper', fromMe: false, desc: Lang.WP }, (async(message, match) => {

        var r_text = new Array();

        r_text[0] = "https://images.wallpaperscraft.com/image/cat_down_paw_51653_300x168.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/cat_down_playful_57703_300x168.jpg";
        r_text[2] = "https://images.wallpaperscraft.com/image/cat_night_lights_74375_300x168.jpg";
        r_text[3] = "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_300x168.jpg";
        r_text[4] = "https://images.wallpaperscraft.com/image/cat_computer_curiosity_56487_300x168.jpg";
        r_text[5] = "https://images.wallpaperscraft.com/image/cat_sit_glare_85388_300x168.jpg";
        r_text[6] = "https://images.wallpaperscraft.com/image/cat_paw_british_115221_300x168.jpg";
        r_text[7] = "https://images.wallpaperscraft.com/image/cat_muzzle_profile_119212_300x168.jpg";
        r_text[8] = "https://images.wallpaperscraft.com/image/cat_spotted_color_84170_300x168.jpg";
        r_text[9] = "https://images.wallpaperscraft.com/image/cat_face_window_105885_300x168.jpg";
        r_text[10] = "https://images.wallpaperscraft.com/image/cat_pleased_muzzle_117663_300x168.jpg";
        r_text[11] = "https://images.wallpaperscraft.com/image/cat_white_eyes_89254_300x168.jpg";
        r_text[12] = "https://images.wallpaperscraft.com/image/cat_paws_furry_113514_300x168.jpg";
        r_text[13] = "https://images.wallpaperscraft.com/image/kitten_cat_spotted_114818_300x168.jpg";
        r_text[14] = "https://images.wallpaperscraft.com/image/monkey_cat_friends_85409_300x168.jpg";
        r_text[15] = "https://images.wallpaperscraft.com/image/dog_cat_arrow_85141_300x168.jpg";
        r_text[16] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_119000_300x168.jpg";
        r_text[17] = "https://images.wallpaperscraft.com/image/cat_face_eyes_107098_300x168.jpg";
        r_text[18] = "https://images.wallpaperscraft.com/image/cat_fluffy_view_104023_300x168.jpg";
        r_text[19] = "https://images.wallpaperscraft.com/image/cat_box_climb_89269_300x168.jpg";
        r_text[20] = "https://images.wallpaperscraft.com/image/cat_dance_music_57232_300x168.jpg";
        r_text[21] = "https://images.wallpaperscraft.com/image/cat_aquarium_fish_89362_300x168.jpg";
        r_text[22] = "https://images.wallpaperscraft.com/image/cat_face_spotted_106097_300x168.jpg";
        r_text[23] = "https://images.wallpaperscraft.com/image/cat_fat_fluffy_89298_300x168.jpg";
        r_text[24] = "https://images.wallpaperscraft.com/image/cat_fluffy_look_94807_300x168.jpg";
        r_text[25] = "https://images.wallpaperscraft.com/image/kitten_cat_selfie_125757_300x168.jpg";
        r_text[26] = "https://images.wallpaperscraft.com/image/cat_suitcase_antiques_111415_300x168.jpg";
        r_text[27] = "https://images.wallpaperscraft.com/image/cat_fat_lie_89245_300x168.jpg";
        r_text[28] = "https://images.wallpaperscraft.com/image/cat_cute_fluffy_167842_300x168.jpg";
        r_text[29] = "https://images.wallpaperscraft.com/image/cat_autumn_street_117923_300x168.jpg";
        r_text[30] = "https://images.wallpaperscraft.com/image/cat_face_look_out_57910_300x168.jpg";
        r_text[31] = "https://images.wallpaperscraft.com/image/cat_profile_dark_166877_300x168.jpg";
        r_text[32] = "https://images.wallpaperscraft.com/image/cat_spotted_blur_105356_300x168.jpg";
        r_text[33] = "https://images.wallpaperscraft.com/image/cat_black_face_89492_300x168.jpg";
        r_text[34] = "https://images.wallpaperscraft.com/image/cat_spotty_lies_117869_300x168.jpg";
        r_text[35] = "https://images.wallpaperscraft.com/image/cat_discontent_indignation_116779_300x168.jpg";
        r_text[36] = "https://images.wallpaperscraft.com/image/cat_furry_sitting_114718_300x168.jpg";
        r_text[37] = "https://images.wallpaperscraft.com/image/cats_couple_lie_112877_300x168.jpg";
        r_text[38] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_73759_300x168.jpg";
        r_text[40] = "https://images.wallpaperscraft.com/image/cat_fat_look_72684_300x168.jpg";
        r_text[41] = "https://images.wallpaperscraft.com/image/cat_sphinx_shadow_56219_300x168.jpg";
        r_text[42] = "https://images.wallpaperscraft.com/image/cat_sphynx_lie_72093_300x168.jpg";
        r_text[43] = "https://images.wallpaperscraft.com/image/cat_silhouette_blue_87249_300x168.jpg";
        r_text[44] = "https://images.wallpaperscraft.com/image/cat_lynx_face_166909_300x168.jpg";
        r_text[45] = "https://images.wallpaperscraft.com/image/cat_playful_grass_117217_300x168.jpg";
        r_text[46] = "https://images.wallpaperscraft.com/image/cat_muzzle_spotted_114064_300x168.jpg";
        r_text[47] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_107907_300x168.jpg";
        r_text[48] = "https://images.wallpaperscraft.com/image/cat_cute_grass_165263_300x168.jpg";
        r_text[49] = "https://images.wallpaperscraft.com/image/cat_muzzle_tie_116315_300x168.jpg";
        r_text[50] = "https://images.wallpaperscraft.com/image/cat_aggression_funny_104357_300x168.jpg";
        r_text[51] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_78517_300x168.jpg";
        r_text[52] = "https://images.wallpaperscraft.com/image/cat_fright_look_72646_300x168.jpg";
        r_text[53] = "https://images.wallpaperscraft.com/image/cat_rocks_jump_71901_300x168.jpg";
        r_text[54] = "https://images.wallpaperscraft.com/image/cat_face_eyes_57754_300x168.jpg";
        r_text[55] = "https://images.wallpaperscraft.com/image/toys_cats_rabbits_73677_300x168.jpg";
        r_text[56] = "https://images.wallpaperscraft.com/image/cat_furry_book_66511_300x168.jpg";
        r_text[57] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56632_300x168.jpg";
        r_text[58] = "https://images.wallpaperscraft.com/image/cat_lies_gray_114124_300x168.jpg";
        r_text[59] = "https://images.wallpaperscraft.com/image/cat_sit_hide_83101_300x168.jpg";
        r_text[60] = "https://images.wallpaperscraft.com/image/cat_color_ladder_29394_300x168.jpg";
        r_text[61] = "https://images.wallpaperscraft.com/image/cat_fluffy_box_66380_300x168.jpg";
        r_text[62] = "https://images.wallpaperscraft.com/image/cat_furry_look_72725_300x168.jpg";
        r_text[63] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56402_300x168.jpg";
        r_text[64] = "https://images.wallpaperscraft.com/image/cat_muzzle_yawn_117777_300x168.jpg";
        r_text[65] = "https://images.wallpaperscraft.com/image/cat_furry_muzzle_114111_300x168.jpg";
        r_text[66] = "https://images.wallpaperscraft.com/image/cat_fluffy_walk_113818_300x168.jpg";
        r_text[67] = "https://images.wallpaperscraft.com/image/cat_stairs_lie_89497_300x168.jpg";
        r_text[68] = "https://images.wallpaperscraft.com/image/cat_door_background_72708_300x168.jpg";
        r_text[69] = "https://images.wallpaperscraft.com/image/cat_book_glasses_71986_300x168.jpg";
        r_text[70] = "https://images.wallpaperscraft.com/image/cat_muzzle_gray_112923_300x168.jpg";
        r_text[71] = "https://images.wallpaperscraft.com/image/cat_tabby_walk_112844_300x168.jpg";
        r_text[72] = "https://images.wallpaperscraft.com/image/cat_lick_fluffy_109400_300x168.jpg";
        r_text[73] = "https://images.wallpaperscraft.com/image/cat_nature_autumn_72723_300x168.jpg";
        r_text[74] = "https://images.wallpaperscraft.com/image/cat_tabby_stand_56508_300x168.jpg";
        r_text[75] = "https://images.wallpaperscraft.com/image/cat_sofa_lies_115717_300x168.jpg";
        r_text[76] = "https://images.wallpaperscraft.com/image/cat_lies_street_113899_300x168.jpg";
        r_text[77] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_83251_300x168.jpg";
        r_text[78] = "https://images.wallpaperscraft.com/image/cat_treasure_toy_72647_300x168.jpg";
        r_text[79] = "https://images.wallpaperscraft.com/image/cats_kittens_greens_72718_300x168.jpg";
        r_text[80] = "https://images.wallpaperscraft.com/image/cat_fluffy_ladder_113866_300x168.jpg";
        r_text[81] = "https://images.wallpaperscraft.com/image/cats_sleep_collars_72696_300x168.jpg";
        r_text[82] = "https://images.wallpaperscraft.com/image/cat_fence_walk_56514_300x168.jpg";
        r_text[83] = "https://images.wallpaperscraft.com/image/cat_playful_jump_59770_300x168.jpg";
        r_text[84] = "https://images.wallpaperscraft.com/image/cat_pumpkin_background_56710_300x168.jpg";
        r_text[85] = "https://images.wallpaperscraft.com/image/cat_furry_look_57783_300x168.jpg";
        r_text[86] = "https://images.wallpaperscraft.com/image/cats_fat_lie_71748_300x168.jpg";
        r_text[87] = "https://images.wallpaperscraft.com/image/cat_spotted_eyes_56641_300x168.jpg";
        r_text[88] = "https://images.wallpaperscraft.com/image/cat_holiday_grass_72724_300x168.jpg";
        r_text[89] = "https://images.wallpaperscraft.com/image/cat_face_lie_56701_300x168.jpg";
        r_text[90] = "https://images.wallpaperscraft.com/image/cat_eyes_boards_72636_300x168.jpg";
        r_text[91] = "https://images.wallpaperscraft.com/image/cat_paws_blurring_59315_300x168.jpg";
        r_text[92] = "https://images.wallpaperscraft.com/image/cat_muzzle_grass_56611_300x168.jpg";
        r_text[93] = "https://images.wallpaperscraft.com/image/cat_muzzle_collar_56337_300x168.jpg";
        r_text[94] = "https://images.wallpaperscraft.com/image/cat_eyes_face_56745_300x168.jpg";
        r_text[95] = "https://images.wallpaperscraft.com/image/cat_yawn_muzzle_56072_300x168.jpg";
        r_text[96] = "https://images.wallpaperscraft.com/image/bengal_cat_cat_spotted_105785_300x168.jpg";
        r_text[97] = "https://images.wallpaperscraft.com/image/abyssinian_cat_cat_face_105986_300x168.jpg";
        r_text[98] = "https://images.wallpaperscraft.com/image/cat_drawing_table_74931_300x168.jpg";
        r_text[99] = "https://images.wallpaperscraft.com/image/cat_british_eye_26816_300x168.jpg";
        r_text[100] = "https://images.wallpaperscraft.com/image/cat_fluffy_flowers_104552_300x168.jpg";
        r_text[101] = "https://images.wallpaperscraft.com/image/cat_scream_emotion_113359_300x168.jpg";
        r_text[102] = "https://images.wallpaperscraft.com/image/cat_licking_muzzle_113333_300x168.jpg";
        r_text[103] = "https://images.wallpaperscraft.com/image/cat_furry_photo_shoot_89417_300x168.jpg";
        r_text[104] = "https://images.wallpaperscraft.com/image/cat_collar_down_wash_57690_300x168.jpg";
        var i = Math.floor(621 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by W5-BOT' })

    }));
    Asena.addCommand({ pattern: 'catwallpaper', fromMe: true, desc: Lang.WP, dontAddCommandList: true }, (async(message, match) => {

        var r_text = new Array();

        r_text[0] = "https://images.wallpaperscraft.com/image/cat_down_paw_51653_300x168.jpg";
        r_text[1] = "https://images.wallpaperscraft.com/image/cat_down_playful_57703_300x168.jpg";
        r_text[2] = "https://images.wallpaperscraft.com/image/cat_night_lights_74375_300x168.jpg";
        r_text[3] = "https://images.wallpaperscraft.com/image/cat_cute_lie_71887_300x168.jpg";
        r_text[4] = "https://images.wallpaperscraft.com/image/cat_computer_curiosity_56487_300x168.jpg";
        r_text[5] = "https://images.wallpaperscraft.com/image/cat_sit_glare_85388_300x168.jpg";
        r_text[6] = "https://images.wallpaperscraft.com/image/cat_paw_british_115221_300x168.jpg";
        r_text[7] = "https://images.wallpaperscraft.com/image/cat_muzzle_profile_119212_300x168.jpg";
        r_text[8] = "https://images.wallpaperscraft.com/image/cat_spotted_color_84170_300x168.jpg";
        r_text[9] = "https://images.wallpaperscraft.com/image/cat_face_window_105885_300x168.jpg";
        r_text[10] = "https://images.wallpaperscraft.com/image/cat_pleased_muzzle_117663_300x168.jpg";
        r_text[11] = "https://images.wallpaperscraft.com/image/cat_white_eyes_89254_300x168.jpg";
        r_text[12] = "https://images.wallpaperscraft.com/image/cat_paws_furry_113514_300x168.jpg";
        r_text[13] = "https://images.wallpaperscraft.com/image/kitten_cat_spotted_114818_300x168.jpg";
        r_text[14] = "https://images.wallpaperscraft.com/image/monkey_cat_friends_85409_300x168.jpg";
        r_text[15] = "https://images.wallpaperscraft.com/image/dog_cat_arrow_85141_300x168.jpg";
        r_text[16] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_119000_300x168.jpg";
        r_text[17] = "https://images.wallpaperscraft.com/image/cat_face_eyes_107098_300x168.jpg";
        r_text[18] = "https://images.wallpaperscraft.com/image/cat_fluffy_view_104023_300x168.jpg";
        r_text[19] = "https://images.wallpaperscraft.com/image/cat_box_climb_89269_300x168.jpg";
        r_text[20] = "https://images.wallpaperscraft.com/image/cat_dance_music_57232_300x168.jpg";
        r_text[21] = "https://images.wallpaperscraft.com/image/cat_aquarium_fish_89362_300x168.jpg";
        r_text[22] = "https://images.wallpaperscraft.com/image/cat_face_spotted_106097_300x168.jpg";
        r_text[23] = "https://images.wallpaperscraft.com/image/cat_fat_fluffy_89298_300x168.jpg";
        r_text[24] = "https://images.wallpaperscraft.com/image/cat_fluffy_look_94807_300x168.jpg";
        r_text[25] = "https://images.wallpaperscraft.com/image/kitten_cat_selfie_125757_300x168.jpg";
        r_text[26] = "https://images.wallpaperscraft.com/image/cat_suitcase_antiques_111415_300x168.jpg";
        r_text[27] = "https://images.wallpaperscraft.com/image/cat_fat_lie_89245_300x168.jpg";
        r_text[28] = "https://images.wallpaperscraft.com/image/cat_cute_fluffy_167842_300x168.jpg";
        r_text[29] = "https://images.wallpaperscraft.com/image/cat_autumn_street_117923_300x168.jpg";
        r_text[30] = "https://images.wallpaperscraft.com/image/cat_face_look_out_57910_300x168.jpg";
        r_text[31] = "https://images.wallpaperscraft.com/image/cat_profile_dark_166877_300x168.jpg";
        r_text[32] = "https://images.wallpaperscraft.com/image/cat_spotted_blur_105356_300x168.jpg";
        r_text[33] = "https://images.wallpaperscraft.com/image/cat_black_face_89492_300x168.jpg";
        r_text[34] = "https://images.wallpaperscraft.com/image/cat_spotty_lies_117869_300x168.jpg";
        r_text[35] = "https://images.wallpaperscraft.com/image/cat_discontent_indignation_116779_300x168.jpg";
        r_text[36] = "https://images.wallpaperscraft.com/image/cat_furry_sitting_114718_300x168.jpg";
        r_text[37] = "https://images.wallpaperscraft.com/image/cats_couple_lie_112877_300x168.jpg";
        r_text[38] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_73759_300x168.jpg";
        r_text[40] = "https://images.wallpaperscraft.com/image/cat_fat_look_72684_300x168.jpg";
        r_text[41] = "https://images.wallpaperscraft.com/image/cat_sphinx_shadow_56219_300x168.jpg";
        r_text[42] = "https://images.wallpaperscraft.com/image/cat_sphynx_lie_72093_300x168.jpg";
        r_text[43] = "https://images.wallpaperscraft.com/image/cat_silhouette_blue_87249_300x168.jpg";
        r_text[44] = "https://images.wallpaperscraft.com/image/cat_lynx_face_166909_300x168.jpg";
        r_text[45] = "https://images.wallpaperscraft.com/image/cat_playful_grass_117217_300x168.jpg";
        r_text[46] = "https://images.wallpaperscraft.com/image/cat_muzzle_spotted_114064_300x168.jpg";
        r_text[47] = "https://images.wallpaperscraft.com/image/cat_fluffy_muzzle_107907_300x168.jpg";
        r_text[48] = "https://images.wallpaperscraft.com/image/cat_cute_grass_165263_300x168.jpg";
        r_text[49] = "https://images.wallpaperscraft.com/image/cat_muzzle_tie_116315_300x168.jpg";
        r_text[50] = "https://images.wallpaperscraft.com/image/cat_aggression_funny_104357_300x168.jpg";
        r_text[51] = "https://images.wallpaperscraft.com/image/leopard_predator_cat_78517_300x168.jpg";
        r_text[52] = "https://images.wallpaperscraft.com/image/cat_fright_look_72646_300x168.jpg";
        r_text[53] = "https://images.wallpaperscraft.com/image/cat_rocks_jump_71901_300x168.jpg";
        r_text[54] = "https://images.wallpaperscraft.com/image/cat_face_eyes_57754_300x168.jpg";
        r_text[55] = "https://images.wallpaperscraft.com/image/toys_cats_rabbits_73677_300x168.jpg";
        r_text[56] = "https://images.wallpaperscraft.com/image/cat_furry_book_66511_300x168.jpg";
        r_text[57] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56632_300x168.jpg";
        r_text[58] = "https://images.wallpaperscraft.com/image/cat_lies_gray_114124_300x168.jpg";
        r_text[59] = "https://images.wallpaperscraft.com/image/cat_sit_hide_83101_300x168.jpg";
        r_text[60] = "https://images.wallpaperscraft.com/image/cat_color_ladder_29394_300x168.jpg";
        r_text[61] = "https://images.wallpaperscraft.com/image/cat_fluffy_box_66380_300x168.jpg";
        r_text[62] = "https://images.wallpaperscraft.com/image/cat_furry_look_72725_300x168.jpg";
        r_text[63] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_56402_300x168.jpg";
        r_text[64] = "https://images.wallpaperscraft.com/image/cat_muzzle_yawn_117777_300x168.jpg";
        r_text[65] = "https://images.wallpaperscraft.com/image/cat_furry_muzzle_114111_300x168.jpg";
        r_text[66] = "https://images.wallpaperscraft.com/image/cat_fluffy_walk_113818_300x168.jpg";
        r_text[67] = "https://images.wallpaperscraft.com/image/cat_stairs_lie_89497_300x168.jpg";
        r_text[68] = "https://images.wallpaperscraft.com/image/cat_door_background_72708_300x168.jpg";
        r_text[69] = "https://images.wallpaperscraft.com/image/cat_book_glasses_71986_300x168.jpg";
        r_text[70] = "https://images.wallpaperscraft.com/image/cat_muzzle_gray_112923_300x168.jpg";
        r_text[71] = "https://images.wallpaperscraft.com/image/cat_tabby_walk_112844_300x168.jpg";
        r_text[72] = "https://images.wallpaperscraft.com/image/cat_lick_fluffy_109400_300x168.jpg";
        r_text[73] = "https://images.wallpaperscraft.com/image/cat_nature_autumn_72723_300x168.jpg";
        r_text[74] = "https://images.wallpaperscraft.com/image/cat_tabby_stand_56508_300x168.jpg";
        r_text[75] = "https://images.wallpaperscraft.com/image/cat_sofa_lies_115717_300x168.jpg";
        r_text[76] = "https://images.wallpaperscraft.com/image/cat_lies_street_113899_300x168.jpg";
        r_text[77] = "https://images.wallpaperscraft.com/image/cat_muzzle_eyes_83251_300x168.jpg";
        r_text[78] = "https://images.wallpaperscraft.com/image/cat_treasure_toy_72647_300x168.jpg";
        r_text[79] = "https://images.wallpaperscraft.com/image/cats_kittens_greens_72718_300x168.jpg";
        r_text[80] = "https://images.wallpaperscraft.com/image/cat_fluffy_ladder_113866_300x168.jpg";
        r_text[81] = "https://images.wallpaperscraft.com/image/cats_sleep_collars_72696_300x168.jpg";
        r_text[82] = "https://images.wallpaperscraft.com/image/cat_fence_walk_56514_300x168.jpg";
        r_text[83] = "https://images.wallpaperscraft.com/image/cat_playful_jump_59770_300x168.jpg";
        r_text[84] = "https://images.wallpaperscraft.com/image/cat_pumpkin_background_56710_300x168.jpg";
        r_text[85] = "https://images.wallpaperscraft.com/image/cat_furry_look_57783_300x168.jpg";
        r_text[86] = "https://images.wallpaperscraft.com/image/cats_fat_lie_71748_300x168.jpg";
        r_text[87] = "https://images.wallpaperscraft.com/image/cat_spotted_eyes_56641_300x168.jpg";
        r_text[88] = "https://images.wallpaperscraft.com/image/cat_holiday_grass_72724_300x168.jpg";
        r_text[89] = "https://images.wallpaperscraft.com/image/cat_face_lie_56701_300x168.jpg";
        r_text[90] = "https://images.wallpaperscraft.com/image/cat_eyes_boards_72636_300x168.jpg";
        r_text[91] = "https://images.wallpaperscraft.com/image/cat_paws_blurring_59315_300x168.jpg";
        r_text[92] = "https://images.wallpaperscraft.com/image/cat_muzzle_grass_56611_300x168.jpg";
        r_text[93] = "https://images.wallpaperscraft.com/image/cat_muzzle_collar_56337_300x168.jpg";
        r_text[94] = "https://images.wallpaperscraft.com/image/cat_eyes_face_56745_300x168.jpg";
        r_text[95] = "https://images.wallpaperscraft.com/image/cat_yawn_muzzle_56072_300x168.jpg";
        r_text[96] = "https://images.wallpaperscraft.com/image/bengal_cat_cat_spotted_105785_300x168.jpg";
        r_text[97] = "https://images.wallpaperscraft.com/image/abyssinian_cat_cat_face_105986_300x168.jpg";
        r_text[98] = "https://images.wallpaperscraft.com/image/cat_drawing_table_74931_300x168.jpg";
        r_text[99] = "https://images.wallpaperscraft.com/image/cat_british_eye_26816_300x168.jpg";
        r_text[100] = "https://images.wallpaperscraft.com/image/cat_fluffy_flowers_104552_300x168.jpg";
        r_text[101] = "https://images.wallpaperscraft.com/image/cat_scream_emotion_113359_300x168.jpg";
        r_text[102] = "https://images.wallpaperscraft.com/image/cat_licking_muzzle_113333_300x168.jpg";
        r_text[103] = "https://images.wallpaperscraft.com/image/cat_furry_photo_shoot_89417_300x168.jpg";
        r_text[104] = "https://images.wallpaperscraft.com/image/cat_collar_down_wash_57690_300x168.jpg";
        var i = Math.floor(621 * Math.random())

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

        await message.client.sendMessage(message.jid, Buffer(respoimage.data), MessageType.image, { mimetype: Mimetype.png, caption: 'Made by W5-BOT' })

    }));
}

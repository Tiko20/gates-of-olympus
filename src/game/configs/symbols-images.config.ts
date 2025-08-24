import BlueGem from "../assets/images/blueGem.png";
import GreenGem from "../assets/images/greenGem.png";
import YellowGem from "../assets/images/yellowGem.png";
import PurpleGem from "../assets/images/purpleGem.png";
import RedGem from "../assets/images/redGem.png";
import Goblet from "../assets/images/goblet.png";
import Ring from "../assets/images/ring.png";
import Hourglass from "../assets/images/hourglass.png";
import Crown from "../assets/images/crown.png";
import Zeus from "../assets/images/zeus-green.png";
import { GameSymbolsEnum } from "../models/game-symbols.enum";

export const symbolsImages: Record<GameSymbolsEnum, string> = {
  [GameSymbolsEnum.BLUE_GEM]: BlueGem,
  [GameSymbolsEnum.GREEN_GEM]: GreenGem,
  [GameSymbolsEnum.YELLOW_GEM]: YellowGem,
  [GameSymbolsEnum.PURPLE_GEM]: PurpleGem,
  [GameSymbolsEnum.RED_GEM]: RedGem,
  [GameSymbolsEnum.GOBLET]: Goblet,
  [GameSymbolsEnum.RING]: Ring,
  [GameSymbolsEnum.HOURGLASS]: Hourglass,
  [GameSymbolsEnum.CROWN]: Crown,
  [GameSymbolsEnum.ZEUS]: Zeus,
};

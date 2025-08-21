import { GameSymbolsEnum } from "../models/game-symbols.enum";
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

export const gameSymbolsSets = new Set<GameSymbolsEnum>([
  GameSymbolsEnum.BLUE_GEM,
  GameSymbolsEnum.GREEN_GEM,
  GameSymbolsEnum.PURPLE_GEM,
  GameSymbolsEnum.YELLOW_GEM,
  GameSymbolsEnum.RED_GEM,
  GameSymbolsEnum.RING,
  GameSymbolsEnum.CROWN,
  GameSymbolsEnum.HOURGLASS,
  GameSymbolsEnum.GOBLET,
  GameSymbolsEnum.ZEUS,
]);

export const gameSymbolsArray = Array.from(gameSymbolsSets);

export const gameImages: Record<GameSymbolsEnum, string> = {
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

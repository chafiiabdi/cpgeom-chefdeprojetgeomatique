const board = document.getElementById("board");
const boardGrid = document.getElementById("boardGrid");
const mapLayer = document.getElementById("mapLayer");
const mapImage = document.getElementById("mapImage");
const emptyMapState = document.getElementById("emptyMapState");
const mapUpload = document.getElementById("mapUpload");
const mapSourceLibrary = document.getElementById("mapSourceLibrary");
const mapSourceLibraryHint = document.getElementById("mapSourceLibraryHint");
const boardTemplateLibrary = document.getElementById("boardTemplateLibrary");
const boardTemplateGuides = document.getElementById("boardTemplateGuides");
const customPictoUpload = document.getElementById("customPictoUpload");
const uploadStatus = document.getElementById("uploadStatus");
const favoritePictos = document.getElementById("favoritePictos");
const legendSections = document.getElementById("legendSections");
const legendHint = document.getElementById("legendHint");
const legendPanel = document.querySelector(".carto-legend-panel");
const legendResizer = document.getElementById("legendResizer");
const legendAddSectionButton = document.getElementById("legendAddSection");
const legendResetButton = document.getElementById("legendReset");
const legendMoveUpButton = document.getElementById("legendMoveUp");
const legendMoveDownButton = document.getElementById("legendMoveDown");
const legendRenameSectionButton = document.getElementById("legendRenameSection");
const stageLayout = document.querySelector(".carto-stage-layout");
const stage = document.getElementById("stage");
const mainContent = document.getElementById("main-content");
const layersList = document.getElementById("layersList");
const layerCount = document.getElementById("layerCount");
const zoomValue = document.getElementById("zoomValue");
const titleInput = document.getElementById("titleInput");
const subtitleInput = document.getElementById("subtitleInput");
const sourceInput = document.getElementById("sourceInput");
const northLabelInput = document.getElementById("northLabelInput");
const boardTitle = document.getElementById("boardTitle");
const boardSubtitle = document.getElementById("boardSubtitle");
const boardSource = document.getElementById("boardSource");
const northLabel = document.getElementById("northLabel");
const selectedText = document.getElementById("selectedText");
const selectedFontSize = document.getElementById("selectedFontSize");
const selectedTextColor = document.getElementById("selectedTextColor");
const selectedTextBackground = document.getElementById("selectedTextBackground");
const selectedTextBorderColor = document.getElementById("selectedTextBorderColor");
const selectedFontFamily = document.getElementById("selectedFontFamily");
const toggleBoldButton = document.getElementById("toggleBold");
const toggleItalicButton = document.getElementById("toggleItalic");
const toggleTransparentBackgroundButton = document.getElementById("toggleTransparentBackground");
const toggleTransparentBorderButton = document.getElementById("toggleTransparentBorder");
const selectedPictoSize = document.getElementById("selectedPictoSize");
const legendSelectionHint = document.getElementById("legendSelectionHint");
const legendSelectedText = document.getElementById("legendSelectedText");
const legendSelectedFontSize = document.getElementById("legendSelectedFontSize");
const legendSelectedTextColor = document.getElementById("legendSelectedTextColor");
const legendSelectedTextBackground = document.getElementById("legendSelectedTextBackground");
const legendSelectedFontFamily = document.getElementById("legendSelectedFontFamily");
const legendToggleBoldButton = document.getElementById("legendToggleBold");
const legendToggleItalicButton = document.getElementById("legendToggleItalic");
const legendToggleTransparentBackgroundButton = document.getElementById("legendToggleTransparentBackground");
const selectedWidth = document.getElementById("selectedWidth");
const selectedHeight = document.getElementById("selectedHeight");
const selectedRotation = document.getElementById("selectedRotation");
const legendColumns = document.getElementById("legendColumns");
const legendSymbolSize = document.getElementById("legendSymbolSize");
const selectionHint = document.getElementById("selectionHint");
const bringForwardButton = document.getElementById("bringForward");
const sendBackwardButton = document.getElementById("sendBackward");
const deleteLayerButton = document.getElementById("deleteLayer");
const exportImageButton = document.getElementById("exportImage");
const resetWorkspaceButton = document.getElementById("resetWorkspace");
const saveProjectButton = document.getElementById("saveProject");
const importProjectButton = document.getElementById("importProject");
const projectUpload = document.getElementById("projectUpload");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const zoomResetButton = document.getElementById("zoomReset");
const boardFullscreenToggle = document.getElementById("boardFullscreenToggle");
const startupWizard = document.getElementById("startupWizard");
const startupWizardStepLabel = document.getElementById("startupWizardStepLabel");
const startupFormatStep = document.getElementById("startupFormatStep");
const startupBoardStep = document.getElementById("startupBoardStep");
const startupWizardBackButton = document.getElementById("startupWizardBack");
const startupWizardNextButton = document.getElementById("startupWizardNext");
const startupWizardStartButton = document.getElementById("startupWizardStart");
const documentMeta = document.getElementById("documentMeta");
const toolbarUndoButton = document.getElementById("toolbarUndo");
const toolbarRedoButton = document.getElementById("toolbarRedo");
const toolbarCopyButton = document.getElementById("toolbarCopy");
const toolbarPasteButton = document.getElementById("toolbarPaste");
const toolbarDeleteButton = document.getElementById("toolbarDelete");
const openDisplaySettingsButton = document.getElementById("openDisplaySettings");
const closeDisplaySettingsButton = document.getElementById("closeDisplaySettings");
const displaySettings = document.getElementById("displaySettings");
const displaySettingsBackdrop = document.getElementById("displaySettingsBackdrop");
const exportFormatInputs = document.querySelectorAll('input[name="exportFormat"]');
const addButtons = document.querySelectorAll("[data-add]");
const shapeButtons = document.querySelectorAll("[data-shape]");
const pictoLibrary = document.getElementById("pictoLibrary");
const pictoSearch = document.getElementById("pictoSearch");
const toolboxSearch = document.getElementById("toolboxSearch");
const toolboxMenuButtons = document.querySelectorAll("[data-toolbox-target]");
const toolboxPanels = document.querySelectorAll(".carto-toolbox__panel");
const leftMenuButtons = document.querySelectorAll("[data-left-target]");
const leftPanels = document.querySelectorAll(".carto-left-panel");
const sideMenuButtons = document.querySelectorAll("[data-side-target]");
const sidePanels = document.querySelectorAll("[data-side-panel]");
const mapManagementMenuButtons = document.querySelectorAll("[data-map-panel-target]");
const mapManagementPanels = document.querySelectorAll(".carto-map-management-panel");
const leftPanel = document.getElementById("leftPanel");
const leftPanelToggle = document.getElementById("leftPanelToggle");
const rightPanel = document.getElementById("rightPanel");
const rightPanelToggle = document.getElementById("rightPanelToggle");
const workspace = document.querySelector(".carto-workspace");
const fullscreenHost = mainContent || workspace;
const themeInputs = document.querySelectorAll('input[name="displayTheme"]');
const touchKeyboardToggle = document.getElementById("touchKeyboardToggle");
const touchKeyboard = document.getElementById("touchKeyboard");
const touchKeyboardClose = document.getElementById("touchKeyboardClose");
const touchKeyboardTarget = document.getElementById("touchKeyboardTarget");
const touchKeyboardRows = document.getElementById("touchKeyboardRows");
const touchKeyboardHead = touchKeyboard?.querySelector(".carto-touch-keyboard__head") || null;
const touchKeyboardShiftButton = document.getElementById("touchKeyboardShift");
const touchKeyboardBackspaceButton = document.getElementById("touchKeyboardBackspace");
const touchKeyboardSpaceButton = document.getElementById("touchKeyboardSpace");
const touchKeyboardClearButton = document.getElementById("touchKeyboardClear");

const dsfrVersion = "1.14.4";
const dsfrArtworkBase = `https://cdn.jsdelivr.net/npm/@gouvfr/dsfr@${dsfrVersion}/dist/artwork/pictograms`;

const pictoCatalog = {
  administration: { label: "Service public", src: `${dsfrArtworkBase}/buildings/city-hall.svg` },
  information: { label: "Information", src: `${dsfrArtworkBase}/system/system.svg` },
  alerte: { label: "Alerte", src: `${dsfrArtworkBase}/system/technical-error.svg` },
  environnement: { label: "Environnement", src: `${dsfrArtworkBase}/environment/sun.svg` },
  nuit: { label: "Observation", src: `${dsfrArtworkBase}/environment/moon.svg` },
  territoire: { label: "Territoire", src: `${dsfrArtworkBase}/system/system.svg` },
};
const readyMapCatalog = [];

const favoritePictoKeys = ["administration", "information", "alerte", "territoire"];
const DEFAULT_BOARD_TEMPLATE_ID = "classique";
const DEFAULT_SOURCE_FRAME = { left: 0.25, top: 18, width: 2.2, height: 22 };
const DEFAULT_NORTH_FRAME = { left: 91, top: 8, width: 6, height: 11 };
const BOARD_TEMPLATES = [
  {
    id: "classique",
    label: "Classique",
    hint: "Planche standard avec legende a droite.",
    legendWidth: 18,
    titleFrame: { left: 0, top: 0, width: 34, height: 6.5 },
    sourceFrame: DEFAULT_SOURCE_FRAME,
    northFrame: DEFAULT_NORTH_FRAME,
  },
  {
    id: "double-mini-cartes",
    label: "Deux mini-cartes",
    hint: "Grande carte avec deux petites cartes en bas a gauche.",
    legendWidth: 18,
    titleFrame: { left: 0, top: 0, width: 38, height: 6.8 },
    sourceFrame: DEFAULT_SOURCE_FRAME,
    northFrame: DEFAULT_NORTH_FRAME,
    mapSlots: [
      { left: 0, top: 0, width: 100, height: 100 },
      { left: 0.8, top: 75.5, width: 16.5, height: 24 },
      { left: 18.7, top: 75.5, width: 16.5, height: 24 },
    ],
  },
  {
    id: "mini-carte-simple",
    label: "Une mini-carte",
    hint: "Grande carte avec une mini-carte en bas a gauche.",
    legendWidth: 18,
    titleFrame: { left: 0, top: 0, width: 38, height: 6.8 },
    sourceFrame: DEFAULT_SOURCE_FRAME,
    northFrame: DEFAULT_NORTH_FRAME,
    mapSlots: [
      { left: 0, top: 0, width: 100, height: 100 },
      { left: 0.8, top: 75.5, width: 18, height: 24 },
    ],
  },
  {
    id: "legende-bas",
    label: "Legende en bas",
    hint: "Carte en haut, legende horizontale en bas.",
    legendWidth: 24,
    legendPlacement: "bottom",
    titleFrame: { left: 0, top: 0, width: 34, height: 6.8 },
    sourceFrame: { left: 0.25, top: 14, width: 2.2, height: 22 },
    northFrame: { left: 90, top: 8, width: 6, height: 11 },
    mapSlots: [{ left: 0, top: 0, width: 100, height: 100 }],
  },
];
const PICTO_GROUPS = [
  { key: "bilans", title: "Bilans" },
  { key: "renfort-fsi", title: "Renfort FSI" },
  { key: "troubles", title: "Troubles / incidents / blocages / filtrages" },
  { key: "autres", title: "Autres pictos" },
];
const shapeCatalog = {
  rectangle: { label: "Rectangle" },
  ellipse: { label: "Ellipse" },
  triangle: { label: "Triangle" },
  diamond: { label: "Losange" },
  line: { label: "Ligne" },
  "arrow-right": { label: "Fleche" },
  "black-bar": { label: "Trait noir" },
  "bubble-left": { label: "Bulle gauche" },
  "bubble-bottom": { label: "Bulle bas" },
  "callout-rect-left": { label: "Encadre gauche" },
  "callout-rect-right": { label: "Encadre droite" },
  "notch-top": { label: "Encoche haut" },
  "notch-bottom": { label: "Encoche bas" },
};

const layers = [
  { id: "map-base", type: "map", label: "Fond cartographique", src: "", mapSlotIndex: 0, locked: false, visible: true, listed: false },
  { id: "title-base", type: "title", label: "Titre principal", locked: false, visible: true, listed: true },
  { id: "header-logo-left-base", type: "picto", label: "Logo bandeau gauche", src: "pictos/Pref1.png", locked: false, visible: false, listed: false, isBannerLogo: true, excludeFromLegend: true },
  { id: "header-logo-right-base", type: "picto", label: "Logo bandeau droit", src: "pictos/Pref.png", locked: false, visible: false, listed: false, isBannerLogo: true, excludeFromLegend: true },
  { id: "source-base", type: "source", label: "Mention source", locked: false, visible: false, listed: false },
  { id: "north-base", type: "north", label: "Orientation", locked: false, visible: false, listed: false },
];
const REPORT_HEADER_LOGO_LAYER_IDS = ["header-logo-left-base", "header-logo-right-base"];
const BASE_LAYER_IDS = ["map-base", "title-base", ...REPORT_HEADER_LOGO_LAYER_IDS, "source-base", "north-base"];
const REPORT_HEADER_LOGO_CONFIG = {
  "header-logo-left-base": {
    label: "Logo bandeau gauche",
    src: "pictos/Pref1.png",
    side: "left",
  },
  "header-logo-right-base": {
    label: "Logo bandeau droit",
    src: "pictos/Pref.png",
    side: "right",
  },
};

const ZOOM_BASELINE = 1;
const ZOOM_MIN = 0.6 * ZOOM_BASELINE;
const ZOOM_MAX = 2 * ZOOM_BASELINE;
const ZOOM_STEP = 0.1 * ZOOM_BASELINE;
const BOARD_PAN_ENABLED = true;
let zoomLevel = ZOOM_BASELINE;
let selectedLayerId = "title-base";
let selectedLayerIds = new Set(["title-base"]);
let selectedTitleTextTarget = "title";
let interaction = null;
let mapImageDataUrl = "";
let customIndex = 0;
let copiedLayerPayload = null;
let historyStack = [];
let redoStack = [];
let isRestoringHistory = false;
let isUndoInProgress = false;
let suspendHistoryPush = false;
const documentCreatedAt = new Date();
let documentUpdatedAt = new Date(documentCreatedAt);
let suppressSelectionClickForLayerId = "";
const themeStorageKey = "carto-display-theme";
let legendSectionCounter = 0;
let legendSelection = null;
let draggedLegendItem = null;
let legendSectionsState = [];
let mapFrameSyncRaf = 0;
let legendResizeInteraction = null;
let panInteraction = null;
const touchViewportPointers = new Map();
let touchViewportGesture = null;
let boardPanX = 0;
let boardPanY = 0;
let currentBoardTemplateId = DEFAULT_BOARD_TEMPLATE_ID;
const collapsedLayerGroups = new Set();
const EXPORT_BASE_WIDTH = 790;
const EXPORT_BASE_HEIGHT = 506;
const EXPORT_OUTPUT_SCALE = 2;
const EXPORT_DEFAULT_ZOOM_PERCENT = 70;
const EXPORT_FORMATS = [
  {
    id: "standard-focus",
    label: "Standard Focus",
    outputType: "png",
    pageWidthCm: 21,
    pageHeightCm: 13.5,
    logicalWidth: 790,
    logicalHeight: 506,
    scale: EXPORT_OUTPUT_SCALE,
    fileSuffix: "standard-focus",
    screenWidthPercent: 80,
  },
  {
    id: "a4",
    label: "A4",
    outputType: "pdf",
    pageWidthCm: 29.7,
    pageHeightCm: 21,
    innerWidthCm: 29.7,
    innerHeightCm: 21,
    logicalWidth: 1117,
    logicalHeight: 790,
    scale: EXPORT_OUTPUT_SCALE,
    fileSuffix: "a4",
    pageWidthPt: 841.89,
    pageHeightPt: 595.28,
    screenWidthPercent: 86,
  },
  {
    id: "a3",
    label: "A3",
    outputType: "pdf",
    pageWidthCm: 42,
    pageHeightCm: 29.7,
    innerWidthCm: 42,
    innerHeightCm: 29.7,
    logicalWidth: 1580,
    logicalHeight: 1117,
    scale: EXPORT_OUTPUT_SCALE,
    fileSuffix: "a3",
    pageWidthPt: 1190.55,
    pageHeightPt: 841.89,
    headerHeightCm: 3.5,
    screenWidthPercent: 92,
  },
];
let currentExportFormatId = EXPORT_FORMATS[0].id;
let startupWizardStep = 1;
const PROJECT_FILE_VERSION = 1;
const PICTO_BASE_SIZE_PERCENT = 12;
const PICTO_DEFAULT_SCALE = 0.45;
const PICTO_DEFAULT_SIZE_PERCENT = Number((PICTO_BASE_SIZE_PERCENT * PICTO_DEFAULT_SCALE).toFixed(2));
const TOUCH_KEYBOARD_TARGET_INPUT_IDS = new Set(["titleInput", "subtitleInput", "selectedText", "legendSelectedText"]);
const TOUCH_KEYBOARD_LAYOUT = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p"],
  ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m"],
  ["w", "x", "c", "v", "b", "n", "é", "è", "à", "'"],
];

let touchKeyboardActiveInput = null;
let touchKeyboardShiftEnabled = false;
let touchKeyboardDragState = null;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function deepClone(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}

function areSnapshotsEqual(a, b) {
  if (!a || !b) {
    return false;
  }

  try {
    return JSON.stringify(a) === JSON.stringify(b);
  } catch (error) {
    return false;
  }
}

function getElementByLayerId(layerId) {
  return board.querySelector(`[data-layer-id="${layerId}"]`);
}

function getLayer(layerId) {
  return layers.find((layer) => layer.id === layerId);
}

function getLayerIndex(layerId) {
  return layers.findIndex((layer) => layer.id === layerId);
}

function isLayerListed(layer) {
  return layer?.listed !== false;
}

function getLayerRectPercent(layerId) {
  const element = getElementByLayerId(layerId);
  if (!element) {
    return null;
  }

  const left = parseFloat(element.style.left || "0");
  const top = parseFloat(element.style.top || "0");
  const width = parseFloat(element.style.width || "0");
  const height = parseFloat(element.style.height || "0");
  return {
    left,
    top,
    right: left + width,
    bottom: top + height,
  };
}

function getFullBoardRectPercent() {
  return {
    left: 0,
    top: 0,
    width: 100,
    height: 100,
    right: 100,
    bottom: 100,
  };
}

function isBannerLogoLayer(layer) {
  return Boolean(layer && (layer.isBannerLogo === true || REPORT_HEADER_LOGO_LAYER_IDS.includes(layer.id)));
}

function getReportHeaderLogoFrame(layerId) {
  if (!isPdfExportFormat()) {
    return null;
  }

  const titleFrame = getCurrentTitleFrame();
  const headerHeight = Number(titleFrame.height) || 0;

  if (layerId === "header-logo-left-base") {
    const height = clamp(headerHeight * 0.76, 6.2, 9.4);
    const width = clamp(height * 0.7, 4.4, 6.6);
    return {
      left: titleFrame.left + 0.8,
      top: titleFrame.top + ((headerHeight - height) / 2),
      width,
      height,
    };
  }

  const height = clamp(headerHeight * 0.62, 5.4, 7.4);
  const width = clamp(height * 0.94, 4.8, 6.8);
  return {
    left: titleFrame.left + titleFrame.width - width - 0.8,
    top: titleFrame.top + ((headerHeight - height) / 2),
    width,
    height,
  };
}

function getLayerWorkAreaRect(layer) {
  if (!layer) {
    return getFullBoardRectPercent();
  }

  if (layer.type === "map") {
    return getMapWorkAreaRectPercent();
  }

  if (isBannerLogoLayer(layer)) {
    const titleFrame = getCurrentTitleFrame();
    return {
      left: titleFrame.left,
      top: titleFrame.top,
      width: titleFrame.width,
      height: titleFrame.height,
      right: titleFrame.left + titleFrame.width,
      bottom: titleFrame.top + titleFrame.height,
    };
  }

  return getFullBoardRectPercent();
}

function clampElementToLayerWorkArea(element, layer) {
  if (!element || !layer) {
    return;
  }

  const workArea = getLayerWorkAreaRect(layer);
  const minSize = getLayerMinSize(layer);
  const width = clamp(parseFloat(element.style.width || "0"), minSize, workArea.width);
  const height = clamp(parseFloat(element.style.height || "0"), minSize, workArea.height);
  const left = clamp(parseFloat(element.style.left || "0"), workArea.left, workArea.right - width);
  const top = clamp(parseFloat(element.style.top || "0"), workArea.top, workArea.bottom - height);

  element.style.width = `${width}%`;
  element.style.height = `${height}%`;
  element.style.left = `${left}%`;
  element.style.top = `${top}%`;
}

function isFullyInsideMapArea(layerId) {
  const rect = getLayerRectPercent(layerId);
  if (!rect) {
    return false;
  }

  const workArea = getMapWorkAreaRectPercent();
  const mapRect = {
    left: workArea.left,
    top: workArea.top,
    right: workArea.right,
    bottom: workArea.bottom,
  };

  return (
    rect.left >= mapRect.left &&
    rect.top >= mapRect.top &&
    rect.right <= mapRect.right &&
    rect.bottom <= mapRect.bottom
  );
}

function canDeleteLayer(layer) {
  if (!layer || layer.locked) {
    return false;
  }
  if (isBannerLogoLayer(layer)) {
    return false;
  }
  if (["title", "source", "north"].includes(layer.type)) {
    return false;
  }
  if (layer.type === "map") {
    return true;
  }
  return true;
}

function getNextLayerId(prefix) {
  customIndex += 1;
  return `${prefix}-${customIndex}`;
}

function normalizeLayerStack() {
  const mapLayers = layers.filter((layer) => layer.type === "map");
  const otherLayers = layers.filter((layer) => layer.type !== "map");
  layers.length = 0;
  layers.push(...mapLayers, ...otherLayers);
}

function getLayerDisplayNameFromFile(fileName = "") {
  const raw = String(fileName || "").trim();
  if (!raw) {
    return "Carte importee";
  }
  return raw.replace(/\.[^.]+$/, "").trim() || "Carte importee";
}

function getMapLayerSource(layer) {
  if (!layer || layer.type !== "map") {
    return "";
  }

  if (layer.id === "map-base") {
    return mapImageDataUrl || layer.src || "";
  }

  return layer.src || "";
}

function setMapLayerSource(layerId, src = "") {
  const layer = getLayer(layerId);
  if (!layer || layer.type !== "map") {
    return;
  }

  const safeSrc = String(src || "");
  if (layerId === "map-base") {
    mapImageDataUrl = safeSrc;
    layer.src = safeSrc;
    mapImage.alt = layer.label || "Carte importee";
    if (safeSrc) {
      mapImage.src = safeSrc;
      mapLayer.classList.add("has-image");
    } else {
      mapImage.removeAttribute("src");
      mapLayer.classList.remove("has-image");
    }
    return;
  }

  layer.src = safeSrc;
  const element = getElementByLayerId(layerId);
  const image = element?.querySelector("img");
  if (!element || !image) {
    return;
  }

  if (safeSrc) {
    image.alt = layer.label || "Carte importee";
    image.src = safeSrc;
    element.classList.add("has-image");
  } else {
    image.removeAttribute("src");
    element.classList.remove("has-image");
  }
}

function hasAnyVisibleMapImage() {
  return layers.some((layer) => (
    layer.type === "map" &&
    layer.visible &&
    Boolean(getMapLayerSource(layer))
  ));
}

function syncMapPlaceholderState() {
  emptyMapState.hidden = hasAnyVisibleMapImage();
}

function createOverlayMapElement(layerId) {
  const element = document.createElement("div");
  element.className = "map-layer map-layer--overlay";
  element.dataset.layerId = layerId;
  element.dataset.type = "map";
  const workArea = getMapWorkAreaRectPercent();
  element.style.left = `${workArea.left}%`;
  element.style.top = `${workArea.top}%`;
  element.style.width = `${workArea.width}%`;
  element.style.height = `${workArea.height}%`;
  element.innerHTML = `<img alt="Carte importee">`;
  board.appendChild(element);
  attachElementEvents(element);
  return element;
}

function createAdditionalMapLayer(dataUrl, label = "Carte importee") {
  const layerId = getNextLayerId("map");
  createOverlayMapElement(layerId);

  layers.push({
    id: layerId,
    type: "map",
    label,
    src: dataUrl,
    mapSlotIndex: getPreferredMapSlotIndexForNewLayer(),
    locked: false,
    visible: true,
    listed: true,
  });

  setMapLayerSource(layerId, dataUrl);
  return layerId;
}

function hasRedoAvailable() {
  return redoStack.length > 0;
}

function getLayerMinSize(layer) {
  if (!layer) {
    return 1;
  }

  if (layer.type === "picto") {
    return 1;
  }

  return 1;
}

function getLegendWidthPercent() {
  const isBottomLegend = getCurrentLegendPlacement() === "bottom";
  const inlineSize = parseFloat(isBottomLegend ? legendPanel?.style?.height || "" : legendPanel?.style?.width || "");
  if (Number.isFinite(inlineSize)) {
    return clamp(inlineSize, 10, 60);
  }

  const boardSize = isBottomLegend ? (board?.clientHeight || 0) : (board?.clientWidth || 0);
  const legendSizePx = isBottomLegend ? (legendPanel?.clientHeight || 0) : (legendPanel?.clientWidth || 0);
  if (!boardSize || !legendSizePx) {
    return 18;
  }

  return clamp((legendSizePx / boardSize) * 100, 10, 60);
}

function getCurrentLegendPlacement() {
  return getBoardTemplateById(currentBoardTemplateId)?.legendPlacement || "right";
}

function setLegendWidthPercent(value) {
  const next = clamp(Number(value) || 18, 10, 60);
  const isBottomLegend = getCurrentLegendPlacement() === "bottom";
  const contentFrame = getBoardContentFramePercent();
  const bodyFrame = getBoardBodyFramePercent();
  const bottomInset = Math.max(0, 100 - contentFrame.bottom);
  board?.classList.toggle("carto-board--legend-bottom", isBottomLegend);
  if (legendPanel) {
    legendPanel.style.width = isBottomLegend ? `${contentFrame.width}%` : `${next}%`;
    legendPanel.style.height = isBottomLegend ? `${next}%` : `${bodyFrame.height}%`;
    legendPanel.style.left = isBottomLegend ? `${contentFrame.left}%` : "";
    legendPanel.style.right = `${contentFrame.left}%`;
    legendPanel.style.top = isBottomLegend ? "auto" : `${bodyFrame.top}%`;
    legendPanel.style.bottom = isBottomLegend ? `${contentFrame.top}%` : "";
  }
  if (legendResizer) {
    legendResizer.style.right = isBottomLegend ? `${contentFrame.left}%` : `calc(${contentFrame.left}% + ${next}% - 4px)`;
    legendResizer.style.left = isBottomLegend ? `${contentFrame.left}%` : "";
    legendResizer.style.top = isBottomLegend ? `calc(${contentFrame.bottom - next}% - 4px)` : `${bodyFrame.top}%`;
    legendResizer.style.bottom = isBottomLegend ? "" : `${bottomInset}%`;
    legendResizer.style.width = isBottomLegend ? `${contentFrame.width}%` : "8px";
    legendResizer.style.height = isBottomLegend ? "8px" : "";
    legendResizer.setAttribute("aria-orientation", isBottomLegend ? "horizontal" : "vertical");
  }
}

function getMapWorkAreaWidthPercent() {
  return getMapWorkAreaRectPercent().width;
}

function getMapWorkAreaHeightPercent() {
  return getMapWorkAreaRectPercent().height;
}

function getMapWorkAreaRectPercent() {
  const legendSize = getLegendWidthPercent();
  const contentFrame = getBoardContentFramePercent();
  const bodyFrame = getBoardBodyFramePercent();
  if (getCurrentLegendPlacement() === "bottom") {
    return {
      left: contentFrame.left,
      top: bodyFrame.top,
      width: contentFrame.width,
      height: Math.max(0, bodyFrame.height - legendSize),
      right: contentFrame.right,
      bottom: contentFrame.bottom - legendSize,
    };
  }

  return {
    left: contentFrame.left,
    top: bodyFrame.top,
    width: Math.max(0, contentFrame.width - legendSize),
    height: bodyFrame.height,
    right: contentFrame.right - legendSize,
    bottom: contentFrame.bottom,
  };
}

function fitMapLayerToWorkArea(layerId) {
  const element = getElementByLayerId(layerId);
  const layer = getLayer(layerId);
  if (!element || !layer) {
    return;
  }

  const slots = getBoardTemplateMapSlots();
  const slotIndex = getTemplateSlotIndexForLayer(layer);
  const frame = resolveBoardTemplateMapSlot(slots[slotIndex] || slots[0]);
  element.style.left = `${frame.left}%`;
  element.style.top = `${frame.top}%`;
  element.style.width = `${frame.width}%`;
  element.style.height = `${frame.height}%`;
}

function resetMapLayerFrame() {
  const legendWidthPercent = getLegendWidthPercent();
  setLegendWidthPercent(legendWidthPercent);
  normalizeMapSlotAssignments();
  layers
    .filter((layer) => layer.type === "map")
    .forEach((layer) => fitMapLayerToWorkArea(layer.id));
  renderBoardTemplateGuides();
}

function getBoardTemplateById(templateId = "") {
  return BOARD_TEMPLATES.find((template) => template.id === templateId) || BOARD_TEMPLATES[0];
}

function getBoardTemplateMapSlots(template = null) {
  const resolvedTemplate = template || getBoardTemplateById(currentBoardTemplateId);
  const slots = Array.isArray(resolvedTemplate?.mapSlots) && resolvedTemplate.mapSlots.length
    ? resolvedTemplate.mapSlots
    : [{ left: 0, top: 0, width: 100, height: 100 }];
  return slots;
}

function resolveBoardTemplateMapSlot(slot = null) {
  const workArea = getMapWorkAreaRectPercent();
  const safeSlot = slot || { left: 0, top: 0, width: 100, height: 100 };
  return {
    left: workArea.left + ((Number(safeSlot.left) || 0) * (workArea.width / 100)),
    top: workArea.top + ((Number(safeSlot.top) || 0) * (workArea.height / 100)),
    width: (Number(safeSlot.width) || 100) * (workArea.width / 100),
    height: (Number(safeSlot.height) || 100) * (workArea.height / 100),
  };
}

function getTemplateSlotIndexForLayer(layer) {
  if (!layer || layer.type !== "map") {
    return 0;
  }

  const slotCount = getBoardTemplateMapSlots().length;
  const slotIndex = Number(layer.mapSlotIndex);
  if (Number.isFinite(slotIndex) && slotIndex >= 0 && slotIndex < slotCount) {
    return slotIndex;
  }
  return 0;
}

function getUsedMapSlotIndexes(excludeLayerId = "") {
  const used = new Set();
  layers.forEach((layer) => {
    if (layer.type !== "map" || layer.id === excludeLayerId) {
      return;
    }
    const slotIndex = getTemplateSlotIndexForLayer(layer);
    if (Number.isFinite(slotIndex)) {
      used.add(slotIndex);
    }
  });
  return used;
}

function getPreferredMapSlotIndexForNewLayer() {
  const slots = getBoardTemplateMapSlots();
  const used = getUsedMapSlotIndexes();
  for (let index = 1; index < slots.length; index += 1) {
    if (!used.has(index)) {
      return index;
    }
  }
  return 0;
}

function normalizeMapSlotAssignments() {
  const slots = getBoardTemplateMapSlots();
  const used = new Set();

  const baseMapLayer = getLayer("map-base");
  if (baseMapLayer) {
    baseMapLayer.mapSlotIndex = 0;
    used.add(0);
  }

  layers
    .filter((layer) => layer.type === "map" && layer.id !== "map-base")
    .forEach((layer) => {
      const currentIndex = Number(layer.mapSlotIndex);
      if (
        Number.isFinite(currentIndex)
        && currentIndex >= 0
        && currentIndex < slots.length
        && !used.has(currentIndex)
      ) {
        layer.mapSlotIndex = currentIndex;
        used.add(currentIndex);
        return;
      }

      let nextIndex = -1;
      for (let index = 1; index < slots.length; index += 1) {
        if (!used.has(index)) {
          nextIndex = index;
          break;
        }
      }

      layer.mapSlotIndex = nextIndex === -1 ? 0 : nextIndex;
      used.add(layer.mapSlotIndex);
    });
}

function applyFrameToLayer(layerId, frame = null) {
  const element = getElementByLayerId(layerId);
  if (!element || !frame) {
    return;
  }

  element.style.left = `${Number(frame.left) || 0}%`;
  element.style.top = `${Number(frame.top) || 0}%`;
  element.style.width = `${Number(frame.width) || 0}%`;
  element.style.height = `${Number(frame.height) || 0}%`;
}

function applyCurrentFormatStructuralLayout() {
  setLegendWidthPercent(getLegendWidthPercent());
  resetMapLayerFrame();
  applyFrameToLayer("title-base", getCurrentTitleFrame());
  applyFrameToLayer("source-base", getCurrentSourceFrame());
  applyFrameToLayer("north-base", getCurrentNorthFrame());
  syncReportHeaderLogoLayers({ forceDefaultFrame: true });
  applyTextLayout("title-base");
  applyTextLayout("source-base");
}

function applyCurrentFormatTitleStylePreset() {
  initializeTextStyleState("title-base", getDefaultTitleStyleForCurrentFormat());
}

function applyBoardTemplate(templateId, options = {}) {
  const template = getBoardTemplateById(templateId);
  if (!template) {
    return false;
  }

  const {
    pushToHistory = true,
    markModified = true,
    refreshUi = true,
  } = options;

  if (pushToHistory) {
    pushHistory();
  }

  currentBoardTemplateId = template.id;
  board.classList.toggle("carto-board--legend-bottom", getCurrentLegendPlacement() === "bottom");
  normalizeMapSlotAssignments();
  setLegendWidthPercent(template.legendWidth);
  resetMapLayerFrame();
  applyFrameToLayer("title-base", getCurrentTitleFrame());
  applyFrameToLayer("source-base", getCurrentSourceFrame());
  applyFrameToLayer("north-base", getCurrentNorthFrame());
  syncReportHeaderLogoLayers({ forceDefaultFrame: true });
  applyTextLayout("title-base");
  applyTextLayout("source-base");

  if (refreshUi) {
    renderBoardTemplateLibrary();
    renderLayers();
    refreshSelectedControls();
  } else {
    renderBoardTemplateLibrary();
  }

  if (markModified) {
    markDocumentModified();
  }
  return true;
}

function buildBoardTemplateButton(template) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "carto-board-template";
  if (template.id === currentBoardTemplateId) {
    button.classList.add("is-active");
  }
  button.dataset.templateId = template.id;

  const preview = document.createElement("span");
  preview.className = "carto-board-template__preview";

  const mapArea = document.createElement("span");
  mapArea.className = "carto-board-template__map";
  const isBottomLegend = (template.legendPlacement || "right") === "bottom";
  const mapAreaWidth = isBottomLegend ? 100 : 100 - template.legendWidth;
  const mapAreaHeight = isBottomLegend ? 100 - template.legendWidth : 100;
  mapArea.style.width = `${mapAreaWidth}%`;
  mapArea.style.height = `${mapAreaHeight}%`;

  const legendArea = document.createElement("span");
  legendArea.className = "carto-board-template__legend";
  if (isBottomLegend) {
    legendArea.style.left = "0";
    legendArea.style.right = "0";
    legendArea.style.top = `${100 - template.legendWidth}%`;
    legendArea.style.bottom = "0";
    legendArea.style.width = "100%";
    legendArea.style.height = `${template.legendWidth}%`;
    legendArea.style.borderLeft = "0";
    legendArea.style.borderTop = "1px solid #cfd4ea";
  } else {
    legendArea.style.width = `${template.legendWidth}%`;
  }

  const titleArea = document.createElement("span");
  titleArea.className = "carto-board-template__title";
  titleArea.style.left = `${template.titleFrame.left}%`;
  titleArea.style.top = `${template.titleFrame.top}%`;
  titleArea.style.width = `${template.titleFrame.width}%`;
  titleArea.style.height = `${template.titleFrame.height}%`;

  preview.append(mapArea, legendArea, titleArea);

  getBoardTemplateMapSlots(template).forEach((slot, index) => {
    if (index === 0) {
      return;
    }
    const inset = document.createElement("span");
    inset.className = "carto-board-template__legend";
    inset.style.left = `${(Number(slot.left) || 0) * (mapAreaWidth / 100)}%`;
    inset.style.top = `${(Number(slot.top) || 0) * (mapAreaHeight / 100)}%`;
    inset.style.width = `${(Number(slot.width) || 0) * (mapAreaWidth / 100)}%`;
    inset.style.height = `${(Number(slot.height) || 0) * (mapAreaHeight / 100)}%`;
    inset.style.right = "auto";
    inset.style.bottom = "auto";
    inset.style.borderLeft = "0";
    inset.style.border = "1px solid #cfd4ea";
    preview.appendChild(inset);
  });

  const label = document.createElement("span");
  label.className = "carto-board-template__label";
  label.textContent = template.label;

  const hint = document.createElement("span");
  hint.className = "carto-board-template__hint";
  hint.textContent = template.hint;

  button.append(preview, label, hint);
  button.addEventListener("click", () => {
    const fromStartup = isStartupWizardVisible();
    applyBoardTemplate(template.id, {
      pushToHistory: !fromStartup,
      markModified: !fromStartup,
    });
    if (!fromStartup) {
      updateStatusMessage(`Planche appliquee : ${template.label}`);
    }
  });

  return button;
}

function renderBoardTemplateLibrary() {
  if (!boardTemplateLibrary) {
    return;
  }

  boardTemplateLibrary.innerHTML = "";
  BOARD_TEMPLATES.forEach((template) => {
    boardTemplateLibrary.appendChild(buildBoardTemplateButton(template));
  });
}

function renderBoardTemplateGuides() {
  if (!boardTemplateGuides) {
    return;
  }

  boardTemplateGuides.innerHTML = "";
  const slots = getBoardTemplateMapSlots();
  if (slots.length <= 1) {
    return;
  }

  slots.forEach((slot, index) => {
    if (index === 0) {
      return;
    }

    const slotUsed = layers.some((layer) => (
      layer.type === "map"
      && getTemplateSlotIndexForLayer(layer) === index
      && Boolean(getMapLayerSource(layer))
      && layer.visible
    ));
    if (slotUsed) {
      return;
    }

    const frame = resolveBoardTemplateMapSlot(slot);
    const guide = document.createElement("div");
    guide.className = "carto-board-template-guide";
    guide.style.left = `${frame.left}%`;
    guide.style.top = `${frame.top}%`;
    guide.style.width = `${frame.width}%`;
    guide.style.height = `${frame.height}%`;

    const label = document.createElement("span");
    label.className = "carto-board-template-guide__label";
    label.textContent = `Mini-carte ${index}`;
    guide.appendChild(label);
    boardTemplateGuides.appendChild(guide);
  });
}

function scheduleMapLayerFrameSync() {
  if (mapFrameSyncRaf) {
    cancelAnimationFrame(mapFrameSyncRaf);
  }

  mapFrameSyncRaf = requestAnimationFrame(() => {
    resetMapLayerFrame();
    mapFrameSyncRaf = 0;
  });
}

function startLegendResize(event) {
  if (!legendResizer || !legendPanel || event.button !== 0) {
    return;
  }

  pushHistory();
  event.preventDefault();
  const boardRect = board.getBoundingClientRect();
  legendResizeInteraction = {
    pointerId: event.pointerId,
    boardLeft: boardRect.left,
    boardTop: boardRect.top,
    boardWidth: boardRect.width,
    boardHeight: boardRect.height,
  };
  legendResizer.classList.add("is-active");
  legendResizer.setPointerCapture(event.pointerId);
}

function updateLegendResize(event) {
  if (!legendResizeInteraction) {
    return false;
  }
  if (event.pointerId !== legendResizeInteraction.pointerId) {
    return false;
  }

  if (getCurrentLegendPlacement() === "bottom") {
    const relativeY = clamp(event.clientY - legendResizeInteraction.boardTop, 0, legendResizeInteraction.boardHeight);
    const legendHeightPercent = ((legendResizeInteraction.boardHeight - relativeY) / legendResizeInteraction.boardHeight) * 100;
    setLegendWidthPercent(legendHeightPercent);
  } else {
    const relativeX = clamp(event.clientX - legendResizeInteraction.boardLeft, 0, legendResizeInteraction.boardWidth);
    const legendWidthPercent = ((legendResizeInteraction.boardWidth - relativeX) / legendResizeInteraction.boardWidth) * 100;
    setLegendWidthPercent(legendWidthPercent);
  }
  resetMapLayerFrame();
  return true;
}

function endLegendResize(event) {
  if (!legendResizeInteraction || !legendResizer) {
    return;
  }
  if (event?.pointerId !== undefined && event.pointerId !== legendResizeInteraction.pointerId) {
    return;
  }

  if (event?.pointerId !== undefined && legendResizer.hasPointerCapture(event.pointerId)) {
    legendResizer.releasePointerCapture(event.pointerId);
  }
  legendResizer.classList.remove("is-active");
  legendResizeInteraction = null;
  refreshSelectedControls();
}

function clearLegendResizeState() {
  if (!legendResizeInteraction || !legendResizer) {
    legendResizer?.classList.remove("is-active");
    legendResizeInteraction = null;
    return;
  }

  const pointerId = legendResizeInteraction.pointerId;
  if (legendResizer.hasPointerCapture?.(pointerId)) {
    try {
      legendResizer.releasePointerCapture(pointerId);
    } catch (error) {
      // Ignore release issues and still clear resize state.
    }
  }
  legendResizer.classList.remove("is-active");
  legendResizeInteraction = null;
}

function setActiveToolboxPanel(panelId) {
  if (!panelId) {
    return;
  }

  toolboxPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === panelId);
  });

  toolboxMenuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.toolboxTarget === panelId);
  });
}

function initializeToolboxMenu() {
  toolboxMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveToolboxPanel(button.dataset.toolboxTarget);
    });
  });

  if (toolboxSearch) {
    toolboxSearch.addEventListener("input", (event) => {
      const query = event.target.value.trim().toLowerCase();
      let firstVisibleButton = null;

      toolboxMenuButtons.forEach((button) => {
        const isMatch = button.textContent.toLowerCase().includes(query);
        button.classList.toggle("is-filtered-out", !isMatch);
        if (isMatch && !firstVisibleButton) {
          firstVisibleButton = button;
        }
      });

      const activeButton = [...toolboxMenuButtons].find((button) => button.classList.contains("is-active") && !button.classList.contains("is-filtered-out"));
      if (activeButton) {
        return;
      }

      if (firstVisibleButton) {
        setActiveToolboxPanel(firstVisibleButton.dataset.toolboxTarget);
      }
    });
  }

  const initiallyActiveButton = [...toolboxMenuButtons].find((button) => button.classList.contains("is-active"));
  setActiveToolboxPanel(initiallyActiveButton?.dataset.toolboxTarget || toolboxPanels[0]?.id || "");
}

function initializePictoSearch() {
  if (!pictoSearch) {
    return;
  }

  pictoSearch.addEventListener("input", () => {
    applyPictoSearchFilter();
  });
}

function setActiveSidePanel(panelId) {
  if (!panelId) {
    return;
  }

  if ([...mapManagementPanels].some((panel) => panel.id === panelId)) {
    setActiveSidePanel("mapManagerPanel");
    setActiveMapManagementPanel(panelId);
    return;
  }

  sidePanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === panelId);
  });

  sideMenuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.sideTarget === panelId);
  });
}

function setActiveMapManagementPanel(panelId) {
  if (!panelId) {
    return;
  }

  mapManagementPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === panelId);
  });

  mapManagementMenuButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.mapPanelTarget === panelId);
  });
}

function activateMapPropertiesPanel() {
  setActiveSidePanel("mapManagerPanel");
  setActiveMapManagementPanel("propertiesPanel");
}

function initializeSideMenu() {
  rightPanel?.classList.add("js-side-panels");

  sideMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveSidePanel(button.dataset.sideTarget);
    });
  });

  const initiallyActiveButton = [...sideMenuButtons].find((button) => button.classList.contains("is-active"));
  setActiveSidePanel(initiallyActiveButton?.dataset.sideTarget || sidePanels[0]?.id || "");
}

function initializeMapManagementMenu() {
  mapManagementMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveMapManagementPanel(button.dataset.mapPanelTarget);
    });
  });

  const initiallyActiveButton = [...mapManagementMenuButtons].find((button) => button.classList.contains("is-active"));
  setActiveMapManagementPanel(initiallyActiveButton?.dataset.mapPanelTarget || mapManagementPanels[0]?.id || "");
}

function setActiveLeftPanel(panelId, activeButton = null) {
  if (!panelId) {
    return;
  }

  leftPanels.forEach((panel) => {
    panel.classList.toggle("is-active", panel.id === panelId);
  });

  if (activeButton) {
    leftMenuButtons.forEach((button) => {
      button.classList.toggle("is-active", button === activeButton);
    });
    return;
  }

  const matchedButton = [...leftMenuButtons].find((button) => button.dataset.leftTarget === panelId) || null;
  leftMenuButtons.forEach((button) => {
    button.classList.toggle("is-active", button === matchedButton);
  });
}

function initializeLeftMenu() {
  if (!leftMenuButtons.length || !leftPanels.length) {
    return;
  }

  leftPanel?.classList.add("js-left-panels");

  leftMenuButtons.forEach((button) => {
    button.addEventListener("click", () => {
      setActiveLeftPanel(button.dataset.leftTarget, button);
      if (button.dataset.toolboxTarget) {
        setActiveToolboxPanel(button.dataset.toolboxTarget);
      }
    });
  });

  const initiallyActiveButton = [...leftMenuButtons].find((button) => button.classList.contains("is-active"));
  setActiveLeftPanel(initiallyActiveButton?.dataset.leftTarget || leftPanels[0]?.id || "", initiallyActiveButton || null);
  if (initiallyActiveButton?.dataset.toolboxTarget) {
    setActiveToolboxPanel(initiallyActiveButton.dataset.toolboxTarget);
  }
}

function updatePanelCollapseState() {
  const isLeftCollapsed = Boolean(leftPanel?.classList.contains("is-collapsed"));
  const isRightCollapsed = Boolean(rightPanel?.classList.contains("is-collapsed"));

  if (leftPanelToggle) {
    leftPanelToggle.setAttribute("aria-expanded", String(!isLeftCollapsed));
    leftPanelToggle.setAttribute("aria-label", isLeftCollapsed ? "Ouvrir la boite a outils" : "Replier la boite a outils");
  }

  if (rightPanelToggle) {
    rightPanelToggle.setAttribute("aria-expanded", String(!isRightCollapsed));
    rightPanelToggle.setAttribute("aria-label", isRightCollapsed ? "Ouvrir le panneau de droite" : "Replier le panneau de droite");
  }

  if (mainContent) {
    mainContent.classList.toggle("is-left-panel-collapsed", isLeftCollapsed);
    mainContent.classList.toggle("is-right-panel-collapsed", isRightCollapsed);
  }
}

function initializeLeftPanelToggle() {
  if (!leftPanel || !leftPanelToggle) {
    return;
  }

  updatePanelCollapseState();
  leftPanelToggle.addEventListener("click", () => {
    leftPanel.classList.toggle("is-collapsed");
    updatePanelCollapseState();
    scheduleMapLayerFrameSync();
  });
}

function initializeRightPanelToggle() {
  if (!rightPanel || !rightPanelToggle) {
    return;
  }

  updatePanelCollapseState();
  rightPanelToggle.addEventListener("click", () => {
    rightPanel.classList.toggle("is-collapsed");
    updatePanelCollapseState();
    scheduleMapLayerFrameSync();
  });
}

function isWorkspaceFullscreenActive() {
  if (!fullscreenHost) {
    return false;
  }
  return document.fullscreenElement === fullscreenHost || fullscreenHost.classList.contains("is-fallback-fullscreen");
}

function updateWorkspaceFullscreenButton() {
  if (!boardFullscreenToggle) {
    return;
  }
  const isActive = isWorkspaceFullscreenActive();
  boardFullscreenToggle.textContent = isActive ? "Quitter plein écran" : "Plein écran";
  boardFullscreenToggle.setAttribute("aria-pressed", String(isActive));
  boardFullscreenToggle.classList.toggle("is-active", isActive);
}

async function enterWorkspaceFullscreen() {
  if (!fullscreenHost) {
    return;
  }

  const canUseNativeFullscreen = typeof fullscreenHost.requestFullscreen === "function";
  if (canUseNativeFullscreen) {
    try {
      await fullscreenHost.requestFullscreen();
    } catch (error) {
      fullscreenHost.classList.add("is-fallback-fullscreen");
    }
  } else {
    fullscreenHost.classList.add("is-fallback-fullscreen");
  }

  updateWorkspaceFullscreenButton();
  scheduleMapLayerFrameSync();
}

async function exitWorkspaceFullscreen() {
  if (!fullscreenHost) {
    return;
  }

  if (document.fullscreenElement === fullscreenHost && typeof document.exitFullscreen === "function") {
    try {
      await document.exitFullscreen();
    } catch (error) {
      // Ignore browser-level fullscreen exit issues and fall back to CSS mode cleanup.
    }
  }

  fullscreenHost.classList.remove("is-fallback-fullscreen");
  updateWorkspaceFullscreenButton();
  scheduleMapLayerFrameSync();
}

async function toggleWorkspaceFullscreen() {
  if (isWorkspaceFullscreenActive()) {
    await exitWorkspaceFullscreen();
    return;
  }
  await enterWorkspaceFullscreen();
}

function initializeWorkspaceFullscreenToggle() {
  if (!fullscreenHost || !boardFullscreenToggle) {
    return;
  }

  boardFullscreenToggle.addEventListener("click", () => {
    toggleWorkspaceFullscreen();
  });

  document.addEventListener("fullscreenchange", () => {
    mountTouchKeyboardToFullscreenHost();
    requestAnimationFrame(constrainTouchKeyboardInViewport);
    if (document.fullscreenElement !== fullscreenHost) {
      fullscreenHost.classList.remove("is-fallback-fullscreen");
    }
    updateWorkspaceFullscreenButton();
    scheduleMapLayerFrameSync();
  });

  updateWorkspaceFullscreenButton();
}

function applyDisplayTheme(theme) {
  const safeTheme = ["light", "dark", "system"].includes(theme) ? theme : "light";
  document.documentElement.setAttribute("data-fr-scheme", safeTheme);
  localStorage.setItem(themeStorageKey, safeTheme);
  themeInputs.forEach((input) => {
    input.checked = input.value === safeTheme;
  });
}

function openDisplaySettings() {
  if (!displaySettings) {
    return;
  }

  displaySettings.hidden = false;
}

function closeDisplaySettings() {
  if (!displaySettings) {
    return;
  }

  displaySettings.hidden = true;
}

function getExportFormatById(formatId = "") {
  return EXPORT_FORMATS.find((format) => format.id === formatId) || EXPORT_FORMATS[0];
}

function getCurrentExportFormat() {
  return getExportFormatById(currentExportFormatId);
}

function isStartupWizardVisible() {
  return Boolean(startupWizard && !startupWizard.hidden);
}

function isPdfExportFormat(format = getCurrentExportFormat()) {
  return format.outputType === "pdf";
}

function getBoardFrameInsetPercent(format = getCurrentExportFormat()) {
  if (!isPdfExportFormat(format)) {
    return { x: 0, y: 0 };
  }

  const pageWidthCm = Number(format.pageWidthCm || 0);
  const pageHeightCm = Number(format.pageHeightCm || 0);
  const innerWidthCm = Number(format.innerWidthCm || 0);
  const innerHeightCm = Number(format.innerHeightCm || 0);

  if (
    pageWidthCm > 0
    && pageHeightCm > 0
    && innerWidthCm > 0
    && innerHeightCm > 0
    && innerWidthCm <= pageWidthCm
    && innerHeightCm <= pageHeightCm
  ) {
    const insetWidthCm = Math.max(0, (pageWidthCm - innerWidthCm) / 2);
    const insetHeightCm = Math.max(0, (pageHeightCm - innerHeightCm) / 2);
    return {
      x: clamp((insetWidthCm / pageWidthCm) * 100, 0, 10),
      y: clamp((insetHeightCm / pageHeightCm) * 100, 0, 10),
    };
  }

  const marginCm = Number(format.frameMarginCm || 0.7);

  if (pageWidthCm > 0 && pageHeightCm > 0) {
    return {
      x: clamp((marginCm / pageWidthCm) * 100, 0, 10),
      y: clamp((marginCm / pageHeightCm) * 100, 0, 10),
    };
  }

  return { x: 0, y: 0 };
}

function getBoardContentFramePercent(format = getCurrentExportFormat()) {
  const inset = getBoardFrameInsetPercent(format);
  return {
    left: inset.x,
    top: inset.y,
    width: Math.max(0, 100 - (inset.x * 2)),
    height: Math.max(0, 100 - (inset.y * 2)),
    right: 100 - inset.x,
    bottom: 100 - inset.y,
  };
}

function getBoardHeaderHeightPercent(format = getCurrentExportFormat()) {
  if (!isPdfExportFormat(format)) {
    return 0;
  }

  const pageHeightCm = Number(format.pageHeightCm || 0);
  const headerHeightCm = Number(format.headerHeightCm || 0);
  if (pageHeightCm > 0 && headerHeightCm > 0) {
    return clamp((headerHeightCm / pageHeightCm) * 100, 0, 20);
  }

  return 9.2;
}

function getBoardBodyFramePercent(format = getCurrentExportFormat()) {
  const contentFrame = getBoardContentFramePercent(format);
  const headerHeight = getBoardHeaderHeightPercent(format);
  return {
    left: contentFrame.left,
    top: contentFrame.top + headerHeight,
    width: contentFrame.width,
    height: Math.max(0, contentFrame.height - headerHeight),
    right: contentFrame.right,
    bottom: contentFrame.bottom,
  };
}

function getCurrentTitleFrame() {
  if (isPdfExportFormat()) {
    const contentFrame = getBoardContentFramePercent();
    return {
      left: contentFrame.left,
      top: contentFrame.top,
      width: contentFrame.width,
      height: getBoardHeaderHeightPercent(),
    };
  }
  return getBoardTemplateById(currentBoardTemplateId).titleFrame;
}

function getCurrentSourceFrame() {
  if (isPdfExportFormat()) {
    const bodyFrame = getBoardBodyFramePercent();
    return {
      left: bodyFrame.left + 0.15,
      top: bodyFrame.top + 3.6,
      width: 2.2,
      height: 22,
    };
  }
  return getBoardTemplateById(currentBoardTemplateId).sourceFrame || DEFAULT_SOURCE_FRAME;
}

function getCurrentNorthFrame() {
  if (isPdfExportFormat()) {
    const bodyFrame = getBoardBodyFramePercent();
    return {
      left: bodyFrame.right - 6.3,
      top: bodyFrame.top + 1.1,
      width: 6,
      height: 11,
    };
  }
  return getBoardTemplateById(currentBoardTemplateId).northFrame || DEFAULT_NORTH_FRAME;
}

function applyExportFormatLayout() {
  if (!board) {
    return;
  }

  const format = getCurrentExportFormat();
  const logicalWidth = Number(format.logicalWidth) || EXPORT_BASE_WIDTH;
  const logicalHeight = Number(format.logicalHeight) || EXPORT_BASE_HEIGHT;
  const screenWidthPercent = clamp(Number(format.screenWidthPercent) || 80, 60, 96);
  const frameInset = getBoardFrameInsetPercent(format);

  board.style.aspectRatio = `${logicalWidth} / ${logicalHeight}`;
  board.style.width = `min(${screenWidthPercent}%, 100%)`;
  board.style.setProperty("--carto-board-frame-inset-x", `${frameInset.x}%`);
  board.style.setProperty("--carto-board-frame-inset-y", `${frameInset.y}%`);
  board.classList.toggle("carto-board--report-header", isPdfExportFormat(format));
  scheduleMapLayerFrameSync();
}

function getExportButtonIdleLabel(format = getCurrentExportFormat()) {
  return format.outputType === "pdf" ? "Exporter PDF" : "Exporter PNG";
}

function syncExportFormatInputs() {
  if (!exportFormatInputs.length) {
    return;
  }

  exportFormatInputs.forEach((input) => {
    input.checked = input.value === currentExportFormatId;
  });
}

function refreshExportFormatUi() {
  syncExportFormatInputs();
  applyExportFormatLayout();
  if (exportImageButton && !exportImageButton.disabled) {
    exportImageButton.textContent = getExportButtonIdleLabel();
  }
}

function setCurrentExportFormat(formatId, options = {}) {
  const {
    pushToHistory = false,
    markModified = true,
  } = options;

  const nextFormat = getExportFormatById(formatId);
  if (!nextFormat || nextFormat.id === currentExportFormatId) {
    refreshExportFormatUi();
    return;
  }

  if (pushToHistory) {
    pushHistory();
  }

  currentExportFormatId = nextFormat.id;
  refreshExportFormatUi();
  if (isStartupWizardVisible()) {
    applyCurrentFormatTitleStylePreset();
  }
  applyCurrentFormatStructuralLayout();
  renderLayers();
  refreshSelectedControls();
  if (markModified) {
    markDocumentModified();
  }
}

function setStartupWizardStep(step) {
  startupWizardStep = clamp(Number(step) || 1, 1, 2);
  if (!startupWizard) {
    return;
  }

  startupFormatStep?.classList.toggle("is-active", startupWizardStep === 1);
  startupBoardStep?.classList.toggle("is-active", startupWizardStep === 2);
  startupWizardStepLabel.textContent = `Etape ${startupWizardStep} sur 2`;

  if (startupWizardBackButton) {
    startupWizardBackButton.hidden = startupWizardStep === 1;
  }
  if (startupWizardNextButton) {
    startupWizardNextButton.hidden = startupWizardStep !== 1;
  }
  if (startupWizardStartButton) {
    startupWizardStartButton.hidden = startupWizardStep !== 2;
  }
}

function openStartupWizard(step = 1) {
  if (!startupWizard) {
    return;
  }

  startupWizard.hidden = false;
  document.body.classList.add("is-startup-open");
  renderBoardTemplateLibrary();
  refreshExportFormatUi();
  setStartupWizardStep(step);
}

function closeStartupWizard() {
  if (!startupWizard) {
    return;
  }

  startupWizard.hidden = true;
  document.body.classList.remove("is-startup-open");
  scheduleMapLayerFrameSync();
}

function initializeStartupWizard() {
  if (!startupWizard) {
    return;
  }

  startupWizardBackButton?.addEventListener("click", () => {
    setStartupWizardStep(1);
  });

  startupWizardNextButton?.addEventListener("click", () => {
    setStartupWizardStep(2);
  });

  startupWizardStartButton?.addEventListener("click", () => {
    closeStartupWizard();
    const template = getBoardTemplateById(currentBoardTemplateId);
    const format = getCurrentExportFormat();
    updateStatusMessage(`Composeur pret : ${format.label} avec la planche ${template.label}.`);
  });
}

function initializeExportFormatControls() {
  if (!exportFormatInputs.length) {
    refreshExportFormatUi();
    return;
  }

  exportFormatInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        const fromStartup = isStartupWizardVisible();
        setCurrentExportFormat(input.value, { pushToHistory: !fromStartup, markModified: !fromStartup });
        if (!fromStartup) {
          updateStatusMessage(`Format d'export choisi : ${getCurrentExportFormat().label}.`);
        }
      }
    });
  });
  refreshExportFormatUi();
}

function initializeDisplaySettings() {
  const storedTheme = localStorage.getItem(themeStorageKey) || document.documentElement.getAttribute("data-fr-scheme") || "light";
  applyDisplayTheme(storedTheme);

  openDisplaySettingsButton?.addEventListener("click", openDisplaySettings);
  closeDisplaySettingsButton?.addEventListener("click", closeDisplaySettings);
  displaySettingsBackdrop?.addEventListener("click", closeDisplaySettings);

  themeInputs.forEach((input) => {
    input.addEventListener("change", () => {
      if (input.checked) {
        applyDisplayTheme(input.value);
      }
    });
  });
}

function initializeLegendToolbar() {
  legendAddSectionButton?.addEventListener("click", () => {
    const sectionName = prompt("Nom du sous-bloc de legende :", "Nouveau sous-bloc");
    if (!sectionName) {
      return;
    }
    pushHistory();
    legendSectionsState.push(createLegendSection(sectionName.trim() || "Nouveau sous-bloc", "custom"));
    renderLegend();
  });

  legendResetButton?.addEventListener("click", () => {
    pushHistory();
    legendSectionsState = [];
    legendSelection = null;
    renderLegend();
    refreshSelectedControls();
  });

  legendMoveUpButton?.addEventListener("click", () => {
    if (!legendSelection?.sectionId) {
      return;
    }
    const groupIndex = legendSectionsState.findIndex((group) => group.id === legendSelection.sectionId);
    if (groupIndex <= 0) {
      return;
    }
    pushHistory();
    const [sectionState] = legendSectionsState.splice(groupIndex, 1);
    legendSectionsState.splice(groupIndex - 1, 0, sectionState);
    renderLegend();
    refreshSelectedControls();
  });

  legendMoveDownButton?.addEventListener("click", () => {
    if (!legendSelection?.sectionId) {
      return;
    }
    const groupIndex = legendSectionsState.findIndex((group) => group.id === legendSelection.sectionId);
    if (groupIndex === -1 || groupIndex >= legendSectionsState.length - 1) {
      return;
    }
    pushHistory();
    const [sectionState] = legendSectionsState.splice(groupIndex, 1);
    legendSectionsState.splice(groupIndex + 1, 0, sectionState);
    renderLegend();
    refreshSelectedControls();
  });

  legendRenameSectionButton?.addEventListener("click", () => {
    if (!legendSelection?.sectionId) {
      return;
    }
    const section = legendSectionsState.find((group) => group.id === legendSelection.sectionId);
    if (!section) {
      return;
    }
    const nextName = prompt("Nom du sous-bloc :", section.title);
    if (!nextName) {
      return;
    }
    pushHistory();
    section.title = nextName.trim() || section.title;
    renderLegend();
    refreshSelectedControls();
  });
}


function isRotatableLayer(layer) {
  return Boolean(layer && ["title", "source", "text", "shape"].includes(layer.type));
}

function snapshotState() {
  return {
    mapImageDataUrl,
    boardTemplateId: currentBoardTemplateId,
    exportFormatId: currentExportFormatId,
    legendWidthPercent: getLegendWidthPercent(),
    legendSectionsState: deepClone(legendSectionsState),
    legendSectionCounter,
    collapsedLayerGroups: [...collapsedLayerGroups],
    selectedLayerId,
    selectedLayerIds: [...selectedLayerIds],
    selectedTitleTextTarget,
    customIndex,
    titleInput: titleInput.value,
    subtitleInput: subtitleInput.value,
    sourceInput: sourceInput.value,
    northLabelInput: northLabelInput.value,
    gridHidden: boardGrid.classList.contains("is-hidden"),
    layers: layers.map((layer) => {
      const element = getElementByLayerId(layer.id);
      return {
        ...layer,
        html: element ? element.innerHTML : "",
        styles: element ? {
          left: element.style.left,
          top: element.style.top,
          width: element.style.width,
          height: element.style.height,
          visibility: element.style.visibility,
        } : null,
        textStyle: element && isTextStyleLayer(layer)
          ? {
            fontSize: element.dataset.textFontSize,
            textColor: element.dataset.textColor,
            backgroundColor: element.dataset.textBackground,
            borderColor: element.dataset.textBorderColor,
            fontFamily: element.dataset.textFontFamily,
            fontWeight: element.dataset.textFontWeight,
            fontStyle: element.dataset.textFontStyle,
            bgTransparent: element.dataset.bgTransparent === "true",
            borderTransparent: element.dataset.borderTransparent === "true",
          }
          : null,
        subtitleTextStyle: layer.id === "title-base"
          ? getSubtitleStyleState()
          : null,
        shapeStyle: element && isShapeStyleLayer(layer)
          ? {
            fillColor: element.dataset.shapeFill,
            strokeColor: element.dataset.shapeStroke,
            fillTransparent: element.dataset.shapeTransparent === "true",
            shapeType: element.dataset.shapeType || "",
          }
          : null,
        rotation: element ? (element.dataset.rotation || "") : "",
      };
    }),
  };
}

function pushHistory() {
  if (isRestoringHistory || isUndoInProgress || suspendHistoryPush) {
    return;
  }

  const snapshot = snapshotState();
  const lastSnapshot = historyStack[historyStack.length - 1];
  if (lastSnapshot && areSnapshotsEqual(lastSnapshot, snapshot)) {
    return;
  }

  historyStack.push(snapshot);
  if (historyStack.length > 80) {
    historyStack.shift();
  }
  redoStack = [];
  markDocumentModified();
  updateHistoryButtons();
}

function runWithoutHistory(action) {
  const previous = suspendHistoryPush;
  suspendHistoryPush = true;
  try {
    action();
  } finally {
    suspendHistoryPush = previous;
  }
}

function formatDateTime(value) {
  if (!(value instanceof Date)) {
    return "--/--/---- a --:--";
  }

  return value.toLocaleString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).replace(",", " a");
}

function refreshDocumentMeta() {
  if (!documentMeta) {
    return;
  }

  documentMeta.textContent = `Document cree le ${formatDateTime(documentCreatedAt)} - Derniere modification le ${formatDateTime(documentUpdatedAt)}`;
}

function markDocumentModified() {
  documentUpdatedAt = new Date();
  refreshDocumentMeta();
}

function updateHistoryButtons() {
  if (toolbarUndoButton) {
    toolbarUndoButton.disabled = historyStack.length === 0;
  }
  if (toolbarRedoButton) {
    const redoAvailable = hasRedoAvailable();
    toolbarRedoButton.disabled = false;
    toolbarRedoButton.setAttribute("aria-disabled", String(!redoAvailable));
    toolbarRedoButton.classList.toggle("is-inactive", !redoAvailable);
  }
}

function withHistoryAction(action) {
  if (isRestoringHistory) {
    action();
    return;
  }

  pushHistory();
  action();
}

function restoreState(state) {
  isRestoringHistory = true;
  try {
    board.querySelectorAll("[data-layer-id]").forEach((element) => {
      if (!BASE_LAYER_IDS.includes(element.dataset.layerId)) {
        element.remove();
      }
    });

    layers.length = 0;
    state.layers.forEach((layerState) => {
      layers.push({
        id: layerState.id,
        type: layerState.type,
        label: layerState.label,
        locked: layerState.locked,
        visible: layerState.visible,
        listed: layerState.listed,
        src: layerState.src,
        mapSlotIndex: layerState.mapSlotIndex,
        shapeType: layerState.shapeType,
      });

      let element = getElementByLayerId(layerState.id);
      if (!element) {
        if (layerState.type === "map") {
          if (layerState.id === "map-base") {
            element = mapLayer;
          } else {
            element = createOverlayMapElement(layerState.id);
          }
        } else {
          element = document.createElement("div");
          element.className = `board-element board-element--${layerState.type}`;
          element.dataset.layerId = layerState.id;
          element.dataset.type = layerState.type;
          if (layerState.shapeStyle?.shapeType) {
            element.dataset.shapeType = layerState.shapeStyle.shapeType;
          }
          element.innerHTML = layerState.html;
          board.appendChild(element);
          attachElementEvents(element);
        }
      }

      if (element && layerState.styles) {
        element.style.left = layerState.styles.left || "";
        element.style.top = layerState.styles.top || "";
        element.style.width = layerState.styles.width || "";
        element.style.height = layerState.styles.height || "";
        element.style.visibility = layerState.styles.visibility || "";
        if (layerState.type !== "map") {
          element.innerHTML = layerState.html || element.innerHTML;
        }
        element.classList.toggle("is-hidden", !layerState.visible);
        element.classList.toggle("is-locked", !!layerState.locked);
        if (layerState.textStyle && isTextStyleLayer(layerState)) {
          initializeTextStyleState(layerState.id, layerState.textStyle);
        }
        if (layerState.id === "title-base" && layerState.subtitleTextStyle) {
          initializeSubtitleStyleState(layerState.subtitleTextStyle);
        }
        if (layerState.shapeStyle && isShapeStyleLayer(layerState)) {
          if (layerState.shapeStyle.shapeType) {
            element.dataset.shapeType = layerState.shapeStyle.shapeType;
          }
          initializeShapeStyleState(layerState.id, layerState.shapeStyle);
        }
        if (layerState.rotation) {
          element.dataset.rotation = layerState.rotation;
        }
        if (layerState.type === "map") {
          setMapLayerSource(layerState.id, layerState.src || "");
          element.classList.toggle("has-image", Boolean(layerState.src));
          element.style.visibility = layerState.visible ? "visible" : "hidden";
        }
      }
    });

    const addedMissingReportHeaderLogos = ensureReportHeaderLogoBaseLayers();

    const baseLayer = getLayer("map-base");
    const baseSource = baseLayer?.src || state.mapImageDataUrl || "";
    setMapLayerSource("map-base", baseSource);
    syncMapPlaceholderState();
    legendSectionsState = deepClone(state.legendSectionsState || []);
    const restoredLegendCounter = Number(state.legendSectionCounter);
    legendSectionCounter = Number.isFinite(restoredLegendCounter)
      ? restoredLegendCounter
      : inferLegendSectionCounterFromState(legendSectionsState);
    collapsedLayerGroups.clear();
    (state.collapsedLayerGroups || []).forEach((groupKey) => collapsedLayerGroups.add(groupKey));
    currentBoardTemplateId = state.boardTemplateId || DEFAULT_BOARD_TEMPLATE_ID;
    currentExportFormatId = getExportFormatById(state.exportFormatId || EXPORT_FORMATS[0].id).id;
    setLegendWidthPercent(state.legendWidthPercent || 18);
    resetMapLayerFrame();

    titleInput.value = state.titleInput;
    subtitleInput.value = state.subtitleInput;
    sourceInput.value = state.sourceInput;
    northLabelInput.value = state.northLabelInput;
    const restoredCustomIndex = Number(state.customIndex);
    customIndex = Number.isFinite(restoredCustomIndex)
      ? restoredCustomIndex
      : inferCustomIndexFromLayerIds(state.layers);
    selectedTitleTextTarget = state.selectedTitleTextTarget === "subtitle" ? "subtitle" : "title";
    selectedLayerIds = new Set(state.selectedLayerIds && state.selectedLayerIds.length ? state.selectedLayerIds : [state.selectedLayerId || "title-base"]);

    boardGrid.classList.toggle("is-hidden", state.gridHidden);

    syncBaseTexts();
    if (addedMissingReportHeaderLogos) {
      syncReportHeaderLogoLayers({ forceDefaultFrame: true });
    }
    applyLayerOrder();
    renderLayers();
    renderBoardTemplateLibrary();
    refreshExportFormatUi();
    closeStartupWizard();
    if (selectedLayerIds.size > 1) {
      board.querySelectorAll("[data-layer-id]").forEach((element) => {
        element.classList.toggle("is-selected", selectedLayerIds.has(element.dataset.layerId));
      });
      refreshSelectedControls();
    } else {
      selectLayer(state.selectedLayerId || "title-base", { titleTextTarget: selectedTitleTextTarget });
    }
  } finally {
    isRestoringHistory = false;
  }
}

function undoLastAction() {
  if (isRestoringHistory || isUndoInProgress) {
    return;
  }

  const previousState = historyStack.pop();
  if (!previousState) {
    return;
  }

  isUndoInProgress = true;
  const previousSuspendHistoryPush = suspendHistoryPush;
  suspendHistoryPush = true;
  try {
    interaction = null;
    legendResizeInteraction = null;
    redoStack.push(snapshotState());
    restoreState(previousState);
    if (redoStack.length > 80) {
      redoStack.shift();
    }
    markDocumentModified();
    updateHistoryButtons();
  } finally {
    suspendHistoryPush = previousSuspendHistoryPush;
    isUndoInProgress = false;
  }
}

function redoLastAction() {
  if (isRestoringHistory || isUndoInProgress) {
    return;
  }

  let nextState = redoStack.pop();

  if (!nextState) {
    updateHistoryButtons();
    return;
  }

  isUndoInProgress = true;
  const previousSuspendHistoryPush = suspendHistoryPush;
  suspendHistoryPush = true;
  try {
    interaction = null;
    legendResizeInteraction = null;
    historyStack.push(snapshotState());
    if (historyStack.length > 80) {
      historyStack.shift();
    }
    restoreState(nextState);
    markDocumentModified();
    updateHistoryButtons();
  } finally {
    suspendHistoryPush = previousSuspendHistoryPush;
    isUndoInProgress = false;
  }
}

function createResizeHandle(element) {
  if (element.querySelector(".resize-handle")) {
    return;
  }

  const edgeHandles = [
    { position: "top", cursor: "ns-resize" },
    { position: "right", cursor: "ew-resize" },
    { position: "bottom", cursor: "ns-resize" },
    { position: "left", cursor: "ew-resize" },
  ];

  const cornerHandles = [
    { position: "top-left", cursor: "nwse-resize" },
    { position: "top-right", cursor: "nesw-resize" },
    { position: "bottom-right", cursor: "nwse-resize" },
    { position: "bottom-left", cursor: "nesw-resize" },
  ];

  const isMapElement = element.dataset.type === "map";
  const handlePositions = isMapElement ? edgeHandles : [...edgeHandles, ...cornerHandles];

  handlePositions.forEach(({ position, cursor }) => {
    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = `resize-handle resize-handle--${position}`;
    handle.dataset.resize = position;
    handle.setAttribute("aria-label", `Redimensionner ${position}`);
    handle.style.cursor = cursor;
    element.appendChild(handle);
  });
}

function setBoardText(target, value, fallback, options = {}) {
  if (!target) {
    return;
  }
  const { allowEmpty = false } = options;
  const safeValue = String(value || "").trim();
  if (allowEmpty && !safeValue) {
    target.textContent = "";
    target.hidden = true;
    return;
  }
  target.hidden = false;
  target.textContent = safeValue || fallback;
}

function getSubtitleTextNodeFromElement(element) {
  return element?.querySelector("#boardSubtitle, .board-title-banner__text p") || null;
}

function isSubtitleSelectionActive() {
  return !legendSelection
    && selectedLayerId === "title-base"
    && selectedLayerIds.size === 1
    && selectedTitleTextTarget === "subtitle";
}

function getTitleSubtitleNode(element) {
  if (!element) {
    return null;
  }
  return isSubtitleSelectionActive()
    ? getSubtitleTextNodeFromElement(element)
    : element.querySelector("h2");
}

function getSourceTextNode(element) {
  return element.querySelector("#boardSource") || element.querySelectorAll("p")[1] || null;
}

function isTextStyleLayer(layer) {
  return Boolean(layer && ["title", "source", "text"].includes(layer.type));
}

function isShapeStyleLayer(layer) {
  return Boolean(layer && layer.type === "shape");
}

function getDefaultShapeStyle(shapeType = "rectangle") {
  if (shapeType === "black-bar") {
    return {
      fillColor: "#000000",
      strokeColor: "#000000",
      fillTransparent: false,
    };
  }

  if (["line", "arrow-right"].includes(shapeType)) {
    return {
      fillColor: "#000091",
      strokeColor: "#000091",
      fillTransparent: false,
    };
  }

  if (["bubble-left", "bubble-bottom", "callout-rect-left", "callout-rect-right", "notch-top", "notch-bottom"].includes(shapeType)) {
    return {
      fillColor: "#ffffff",
      strokeColor: "#000091",
      fillTransparent: false,
    };
  }

  return {
    fillColor: "rgba(0, 0, 145, 0.18)",
    strokeColor: "#000091",
    fillTransparent: false,
  };
}

function initializeShapeStyleState(layerId, overrides = {}) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element || !isShapeStyleLayer(layer)) {
    return;
  }

  const shapeType = element.dataset.shapeType || "rectangle";
  const defaults = { ...getDefaultShapeStyle(shapeType), ...overrides };
  element.dataset.shapeFill = defaults.fillColor;
  element.dataset.shapeStroke = defaults.strokeColor;
  element.dataset.shapeTransparent = defaults.fillTransparent ? "true" : "false";
  syncShapeStylePresentation(layerId);
}

function getShapeStyleState(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element || !isShapeStyleLayer(layer)) {
    return null;
  }

  const shapeType = element.dataset.shapeType || "rectangle";
  const defaults = getDefaultShapeStyle(shapeType);
  return {
    fillColor: element.dataset.shapeFill || defaults.fillColor,
    strokeColor: element.dataset.shapeStroke || defaults.strokeColor,
    fillTransparent: (element.dataset.shapeTransparent || String(defaults.fillTransparent)) === "true",
  };
}

function syncShapeStylePresentation(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  const shapeState = getShapeStyleState(layerId);
  if (!layer || !element || !shapeState || !isShapeStyleLayer(layer)) {
    return;
  }

  const fill = shapeState.fillTransparent ? "transparent" : shapeState.fillColor;
  setInlineStyle(element, "--shape-fill", fill);
  setInlineStyle(element, "--shape-stroke", shapeState.strokeColor || "#000091");
}

function applyShapeStylesToElement(layerId, nextStyle = {}) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element || !isShapeStyleLayer(layer)) {
    return;
  }

  const currentState = getShapeStyleState(layerId);
  const merged = { ...currentState, ...nextStyle };
  element.dataset.shapeFill = merged.fillColor;
  element.dataset.shapeStroke = merged.strokeColor || "#000091";
  element.dataset.shapeTransparent = merged.fillTransparent ? "true" : "false";
  syncShapeStylePresentation(layerId);
}

function toHexColor(color) {
  if (!color || color === "transparent") {
    return "#000000";
  }

  if (color.startsWith("#")) {
    return color;
  }

  const match = color.match(/\d+/g);
  if (!match || match.length < 3) {
    return "#000000";
  }

  return `#${match.slice(0, 3).map((value) => Number(value).toString(16).padStart(2, "0")).join("")}`;
}

function getTextTargetNode(layer, element) {
  if (!layer || !element) {
    return null;
  }

  if (layer.type === "title") {
    return element.querySelector("h2");
  }

  if (layer.type === "source") {
    return getSourceTextNode(element);
  }

  if (layer.type === "text") {
    return element.querySelector("p");
  }

  return null;
}

function getTitleStyleNodes(element) {
  return [
    element.querySelector("h2"),
  ].filter(Boolean);
}

function setInlineStyle(node, property, value) {
  if (!node) {
    return;
  }

  node.style.setProperty(property, value, "important");
}

function getDefaultTextStyle(layerType) {
  if (layerType === "title") {
    return {
      fontSize: 13,
      textColor: "#ffffff",
      backgroundColor: "#000091",
      borderColor: "#000091",
      fontFamily: "Marianne, Arial, sans-serif",
      fontWeight: "700",
      fontStyle: "normal",
      bgTransparent: false,
      borderTransparent: true,
    };
  }

  if (layerType === "text") {
    return {
      fontSize: 10,
      textColor: "#161616",
      backgroundColor: "#ffffff",
      borderColor: "#000091",
      fontFamily: "Marianne, Arial, sans-serif",
      fontWeight: "400",
      fontStyle: "normal",
      bgTransparent: true,
      borderTransparent: true,
    };
  }

  return {
    fontSize: 14,
    textColor: "#5c5c5c",
    backgroundColor: "#ffffff",
    borderColor: "#000091",
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "400",
    fontStyle: "normal",
    bgTransparent: true,
    borderTransparent: true,
  };
}

function getDefaultTitleStyleForCurrentFormat() {
  if (isPdfExportFormat()) {
    return {
      fontSize: 17,
      textColor: "#161616",
      backgroundColor: "#ffffff",
      borderColor: "#ffffff",
      fontFamily: "Marianne, Arial, sans-serif",
      fontWeight: "700",
      fontStyle: "normal",
      bgTransparent: false,
      borderTransparent: true,
    };
  }

  return getDefaultTextStyle("title");
}

function getDefaultSubtitleStyleForCurrentFormat() {
  const titleDefaults = getDefaultTitleStyleForCurrentFormat();
  return {
    fontSize: clamp(Math.round(Number(titleDefaults.fontSize || 17) * 0.52), 10, 22),
    textColor: "#161616",
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    bgTransparent: true,
    borderTransparent: true,
  };
}

function initializeSubtitleStyleState(overrides = {}) {
  const element = getElementByLayerId("title-base");
  const subtitleNode = getSubtitleTextNodeFromElement(element);
  if (!element || !subtitleNode) {
    return;
  }

  const defaults = { ...getDefaultSubtitleStyleForCurrentFormat(), ...overrides };
  element.dataset.subtitleFontSize = String(defaults.fontSize);
  element.dataset.subtitleTextColor = defaults.textColor;
  element.dataset.subtitleTextBackground = defaults.backgroundColor;
  element.dataset.subtitleTextBorderColor = defaults.borderColor;
  element.dataset.subtitleTextFontFamily = defaults.fontFamily;
  element.dataset.subtitleTextFontWeight = String(defaults.fontWeight);
  element.dataset.subtitleTextFontStyle = defaults.fontStyle;
  element.dataset.subtitleBgTransparent = defaults.bgTransparent ? "true" : "false";
  element.dataset.subtitleBorderTransparent = defaults.borderTransparent ? "true" : "false";
  syncSubtitleStylePresentation();
}

function getSubtitleStyleState() {
  const element = getElementByLayerId("title-base");
  const subtitleNode = getSubtitleTextNodeFromElement(element);
  if (!element || !subtitleNode) {
    return null;
  }

  const defaults = getDefaultSubtitleStyleForCurrentFormat();
  return {
    fontSize: Number(element.dataset.subtitleFontSize || defaults.fontSize),
    textColor: element.dataset.subtitleTextColor || defaults.textColor,
    backgroundColor: element.dataset.subtitleTextBackground || defaults.backgroundColor,
    borderColor: element.dataset.subtitleTextBorderColor || defaults.borderColor,
    fontFamily: element.dataset.subtitleTextFontFamily || defaults.fontFamily,
    fontWeight: element.dataset.subtitleTextFontWeight || defaults.fontWeight,
    fontStyle: element.dataset.subtitleTextFontStyle || defaults.fontStyle,
    bgTransparent: (element.dataset.subtitleBgTransparent || String(defaults.bgTransparent)) === "true",
    borderTransparent: (element.dataset.subtitleBorderTransparent || String(defaults.borderTransparent)) === "true",
  };
}

function syncSubtitleStylePresentation() {
  const element = getElementByLayerId("title-base");
  const subtitleNode = getSubtitleTextNodeFromElement(element);
  const styleState = getSubtitleStyleState();
  if (!element || !subtitleNode || !styleState) {
    return;
  }

  setInlineStyle(subtitleNode, "font-family", styleState.fontFamily);
  setInlineStyle(subtitleNode, "font-weight", String(styleState.fontWeight));
  setInlineStyle(subtitleNode, "font-style", styleState.fontStyle);
  setInlineStyle(subtitleNode, "font-size", `${styleState.fontSize}px`);
  setInlineStyle(subtitleNode, "line-height", String(clamp(1.05 + styleState.fontSize / 180, 1.05, 1.32)));
  setInlineStyle(subtitleNode, "color", styleState.textColor);
}

function applySubtitleStyles(nextStyle = {}) {
  const element = getElementByLayerId("title-base");
  const subtitleNode = getSubtitleTextNodeFromElement(element);
  if (!element || !subtitleNode) {
    return;
  }

  const currentStyle = getSubtitleStyleState();
  const mergedStyle = { ...currentStyle, ...nextStyle };
  element.dataset.subtitleFontSize = String(mergedStyle.fontSize);
  element.dataset.subtitleTextColor = mergedStyle.textColor;
  element.dataset.subtitleTextBackground = mergedStyle.backgroundColor;
  element.dataset.subtitleTextBorderColor = mergedStyle.borderColor;
  element.dataset.subtitleTextFontFamily = mergedStyle.fontFamily;
  element.dataset.subtitleTextFontWeight = String(mergedStyle.fontWeight);
  element.dataset.subtitleTextFontStyle = mergedStyle.fontStyle;
  element.dataset.subtitleBgTransparent = mergedStyle.bgTransparent ? "true" : "false";
  element.dataset.subtitleBorderTransparent = mergedStyle.borderTransparent ? "true" : "false";
  syncSubtitleStylePresentation();
  refreshSelectedControls();
}

function initializeTextStyleState(layerId, overrides = {}) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element || !isTextStyleLayer(layer)) {
    return;
  }

  const defaults = { ...getDefaultTextStyle(layer.type), ...overrides };
  element.dataset.textFontSize = String(defaults.fontSize);
  element.dataset.textColor = defaults.textColor;
  element.dataset.textBackground = defaults.backgroundColor;
  element.dataset.textBorderColor = defaults.borderColor;
  element.dataset.textFontFamily = defaults.fontFamily;
  element.dataset.textFontWeight = String(defaults.fontWeight);
  element.dataset.textFontStyle = defaults.fontStyle;
  element.dataset.bgTransparent = defaults.bgTransparent ? "true" : "false";
  element.dataset.borderTransparent = defaults.borderTransparent ? "true" : "false";
  if (!element.dataset.rotation) {
    element.dataset.rotation = layer.type === "source" ? "180" : "0";
  }
  syncElementTextStylePresentation(layerId);
  if (layer.type === "title") {
    if (!element.dataset.subtitleFontSize) {
      initializeSubtitleStyleState();
    } else {
      syncSubtitleStylePresentation();
    }
  }
}

function getTextStyleState(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  const textNode = getTextTargetNode(layer, element);

  if (!layer || !element || !textNode || !isTextStyleLayer(layer)) {
    return null;
  }

  const defaults = getDefaultTextStyle(layer.type);

  return {
    fontSize: Number(element.dataset.textFontSize || defaults.fontSize),
    textColor: element.dataset.textColor || defaults.textColor,
    backgroundColor: element.dataset.textBackground || defaults.backgroundColor,
    borderColor: element.dataset.textBorderColor || defaults.borderColor,
    fontFamily: element.dataset.textFontFamily || defaults.fontFamily,
    fontWeight: element.dataset.textFontWeight || defaults.fontWeight,
    fontStyle: element.dataset.textFontStyle || defaults.fontStyle,
    bgTransparent: (element.dataset.bgTransparent || String(defaults.bgTransparent)) === "true",
    borderTransparent: (element.dataset.borderTransparent || String(defaults.borderTransparent)) === "true",
  };
}

function syncElementTextStylePresentation(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  const styleState = getTextStyleState(layerId);
  if (!layer || !element || !styleState || !isTextStyleLayer(layer)) {
    return;
  }

  const backgroundColor = styleState.bgTransparent ? "transparent" : styleState.backgroundColor;
  const borderColor = styleState.borderTransparent ? "transparent" : styleState.borderColor;
  const rotation = Number(element.dataset.rotation || (layer.type === "source" ? 180 : 0));
  setInlineStyle(element, "--carto-text-color", styleState.textColor);
  setInlineStyle(element, "--carto-text-bg", backgroundColor);
  setInlineStyle(element, "--carto-text-border", borderColor);
  setInlineStyle(element, "--carto-font-family", styleState.fontFamily);
  setInlineStyle(element, "--carto-font-weight", String(styleState.fontWeight));
  setInlineStyle(element, "--carto-font-style", styleState.fontStyle);
  setInlineStyle(element, "background-color", backgroundColor);
  setInlineStyle(element, "outline", `1px solid ${borderColor}`);
  setInlineStyle(element, "outline-offset", "0");

  if (layer.type === "title") {
    setInlineStyle(element, "--carto-title-font-size", `${styleState.fontSize}px`);
    const titleNode = element.querySelector("h2");

    setInlineStyle(element, "font-family", styleState.fontFamily);
    setInlineStyle(element, "color", styleState.textColor);
    setInlineStyle(element, "background", backgroundColor);
    setInlineStyle(element, "outline", `1px solid ${borderColor}`);
    setInlineStyle(element, "transform", `rotate(${rotation}deg)`);

    setInlineStyle(titleNode, "font-family", styleState.fontFamily);
    setInlineStyle(titleNode, "font-weight", String(styleState.fontWeight));
    setInlineStyle(titleNode, "font-style", styleState.fontStyle);
    setInlineStyle(titleNode, "font-size", `${styleState.fontSize}px`);
    setInlineStyle(titleNode, "line-height", String(clamp(1.02 + styleState.fontSize / 180, 1.02, 1.22)));
    setInlineStyle(titleNode, "color", styleState.textColor);
    syncSubtitleStylePresentation();
  }

  if (layer.type === "source") {
    setInlineStyle(element, "--carto-source-font-size", `${styleState.fontSize}px`);
    const sourceNode = getSourceTextNode(element);

    setInlineStyle(element, "font-family", styleState.fontFamily);
    setInlineStyle(element, "font-weight", String(styleState.fontWeight));
    setInlineStyle(element, "font-style", styleState.fontStyle);
    setInlineStyle(element, "color", styleState.textColor);
    setInlineStyle(element, "background", backgroundColor);
    setInlineStyle(element, "outline", `1px solid ${borderColor}`);

    setInlineStyle(sourceNode, "font-family", styleState.fontFamily);
    setInlineStyle(sourceNode, "font-weight", String(styleState.fontWeight));
    setInlineStyle(sourceNode, "font-style", styleState.fontStyle);
    setInlineStyle(sourceNode, "font-size", `${styleState.fontSize}px`);
    setInlineStyle(sourceNode, "line-height", String(clamp(1.05 + styleState.fontSize / 160, 1.05, 1.3)));
    setInlineStyle(sourceNode, "color", styleState.textColor);
    setInlineStyle(element, "transform", `rotate(${rotation}deg)`);
  }

  if (layer.type === "text") {
    const textNode = element.querySelector("p");
    setInlineStyle(element, "--carto-text-font-size", `${styleState.fontSize}px`);
    setInlineStyle(element, "font-family", styleState.fontFamily);
    setInlineStyle(element, "font-weight", String(styleState.fontWeight));
    setInlineStyle(element, "font-style", styleState.fontStyle);
    setInlineStyle(element, "color", styleState.textColor);
    setInlineStyle(element, "background", backgroundColor);
    setInlineStyle(element, "outline", `1px solid ${borderColor}`);
    setInlineStyle(element, "transform", `rotate(${rotation}deg)`);
    setInlineStyle(textNode, "font-family", styleState.fontFamily);
    setInlineStyle(textNode, "font-weight", String(styleState.fontWeight));
    setInlineStyle(textNode, "font-style", styleState.fontStyle);
    setInlineStyle(textNode, "font-size", `${styleState.fontSize}px`);
    setInlineStyle(textNode, "color", styleState.textColor);
  }
}

function updateTextStyleButtons(styleState, disabled) {
  toggleBoldButton.disabled = disabled;
  toggleItalicButton.disabled = disabled;
  toggleTransparentBackgroundButton.disabled = disabled;
  toggleTransparentBorderButton.disabled = disabled;
  toggleBoldButton.classList.toggle("is-active", !disabled && Number(styleState?.fontWeight || 400) >= 600);
  toggleItalicButton.classList.toggle("is-active", !disabled && styleState?.fontStyle === "italic");
  toggleTransparentBackgroundButton.classList.toggle("is-active", !disabled && Boolean(styleState?.bgTransparent));
  toggleTransparentBorderButton.classList.toggle("is-active", !disabled && Boolean(styleState?.borderTransparent));
}

function applyTextStylesToElement(layerId, nextStyle = {}) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  const textNode = getTextTargetNode(layer, element);

  if (!layer || !element || !textNode || !isTextStyleLayer(layer)) {
    return;
  }

  const currentStyle = getTextStyleState(layerId);
  const mergedStyle = { ...currentStyle, ...nextStyle };
  element.dataset.textFontSize = String(mergedStyle.fontSize);
  element.dataset.textColor = mergedStyle.textColor;
  element.dataset.textBackground = mergedStyle.backgroundColor;
  element.dataset.textBorderColor = mergedStyle.borderColor;
  element.dataset.textFontFamily = mergedStyle.fontFamily;
  element.dataset.textFontWeight = String(mergedStyle.fontWeight);
  element.dataset.textFontStyle = mergedStyle.fontStyle;
  element.dataset.bgTransparent = mergedStyle.bgTransparent ? "true" : "false";
  element.dataset.borderTransparent = mergedStyle.borderTransparent ? "true" : "false";
  syncElementTextStylePresentation(layerId);

  const shouldAutoResizeTextBox = layer.type === "text" && (
    Object.prototype.hasOwnProperty.call(nextStyle, "fontSize") ||
    Object.prototype.hasOwnProperty.call(nextStyle, "fontFamily") ||
    Object.prototype.hasOwnProperty.call(nextStyle, "fontWeight") ||
    Object.prototype.hasOwnProperty.call(nextStyle, "fontStyle")
  );
  if (shouldAutoResizeTextBox) {
    autoSizeTextElement(layerId);
  }

  refreshSelectedControls();
}

let textMeasureCanvas = null;
function getTextMeasureContext() {
  if (!textMeasureCanvas) {
    textMeasureCanvas = document.createElement("canvas");
  }
  return textMeasureCanvas.getContext("2d");
}

function autoSizeTextElement(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element || layer.type !== "text") {
    return;
  }

  const styleState = getTextStyleState(layerId);
  const textNode = element.querySelector("p");
  const measureContext = getTextMeasureContext();
  const boardWidthPx = board.clientWidth || 0;
  const boardHeightPx = board.clientHeight || 0;
  if (!styleState || !textNode || !measureContext || !boardWidthPx || !boardHeightPx) {
    return;
  }

  const text = (textNode.textContent || "").trim() || "Texte libre";
  const fontSizePx = clamp(Number(styleState.fontSize) || 10, 4, 72);
  const fontFamily = styleState.fontFamily || "Marianne, Arial, sans-serif";
  const fontWeight = styleState.fontWeight || "400";
  const fontStyle = styleState.fontStyle || "normal";
  measureContext.font = `${fontStyle} ${fontWeight} ${fontSizePx}px ${fontFamily}`;

  const measuredTextWidthPx = Math.max(fontSizePx * 2.2, measureContext.measureText(text).width);
  const paddingX = Math.max(12, fontSizePx * 0.8);
  const paddingY = Math.max(8, fontSizePx * 0.6);
  const minWidthPx = Math.max(68, fontSizePx * 4);
  const maxWidthPx = Math.max(minWidthPx, boardWidthPx * 0.6);
  const targetWidthPx = clamp(measuredTextWidthPx + paddingX * 2, minWidthPx, maxWidthPx);

  const textZoneWidthPx = Math.max(fontSizePx * 2, targetWidthPx - paddingX * 2);
  const lineCount = Math.max(1, Math.ceil(measuredTextWidthPx / textZoneWidthPx));
  const lineHeightPx = Math.max(fontSizePx * 1.2, fontSizePx + 2);
  const minHeightPx = Math.max(28, fontSizePx * 1.8);
  const maxHeightPx = Math.max(minHeightPx, boardHeightPx * 0.55);
  const targetHeightPx = clamp((lineCount * lineHeightPx) + (paddingY * 2), minHeightPx, maxHeightPx);

  const minSizePercent = getLayerMinSize(layer);
  const targetWidthPercent = clamp((targetWidthPx / boardWidthPx) * 100, minSizePercent, 95);
  const targetHeightPercent = clamp((targetHeightPx / boardHeightPx) * 100, minSizePercent, 95);
  const maxRightBoundary = getMapWorkAreaWidthPercent();
  const currentLeft = parseFloat(element.style.left || "0");
  const currentTop = parseFloat(element.style.top || "0");

  element.style.width = `${targetWidthPercent}%`;
  element.style.height = `${targetHeightPercent}%`;
  element.style.left = `${clamp(currentLeft, 0, Math.max(0, maxRightBoundary - targetWidthPercent))}%`;
  element.style.top = `${clamp(currentTop, 0, Math.max(0, 100 - targetHeightPercent))}%`;
}

function applyTextLayout(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element) {
    return;
  }

  const width = parseFloat(element.style.width || "12");
  const height = parseFloat(element.style.height || "12");

  if (layer.type === "title") {
    const titleNode = element.querySelector("h2");
    if (titleNode) {
      if (!titleNode.style.fontSize) {
        titleNode.style.fontSize = `${clamp(width * 0.09 + height * 0.04, 0.95, 2.1)}rem`;
      }
      if (!titleNode.style.lineHeight) {
        titleNode.style.lineHeight = String(clamp(1.05 + height * 0.01, 1.05, 1.25));
      }
    }
  }

  if (layer.type === "source") {
    const sourceNode = getSourceTextNode(element);
    if (sourceNode) {
      if (!sourceNode.style.fontSize) {
        sourceNode.style.fontSize = `${clamp(width * 0.028 + height * 0.018, 0.68, 1)}rem`;
      }
      if (!sourceNode.style.lineHeight) {
        sourceNode.style.lineHeight = String(clamp(1.2 + height * 0.012, 1.2, 1.5));
      }
    }
  }

}

function getLayerLabel(layer) {
  if (layer.type === "map") {
    return layer.label || (getMapLayerSource(layer) ? "Carte importee" : "Fond cartographique");
  }
  return layer.label;
}

function getLayerSwatchLabel(layer) {
  if (!layer) {
    return "";
  }
  if (layer.type === "picto") {
    return "P";
  }
  if (layer.type === "map") {
    return "C";
  }
  if (layer.type === "title") {
    return "T";
  }
  if (layer.type === "text") {
    return "E";
  }
  return "";
}

function setLayerLockedVisual(layerId) {
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element) {
    return;
  }
  element.classList.toggle("is-locked", layer.locked);
  element.dataset.locked = layer.locked ? "true" : "false";
}

function applyLayerOrder() {
  normalizeLayerStack();
  let mapZCounter = 1;
  let zCounter = 10;
  layers.forEach((layer) => {
    const element = getElementByLayerId(layer.id);
    if (element) {
      if (layer.type === "map") {
        element.style.zIndex = String(mapZCounter);
        mapZCounter += 1;
      } else {
        element.style.zIndex = String(zCounter);
        zCounter += 1;
      }
      setLayerLockedVisual(layer.id);
      applyTextLayout(layer.id);
      if (isShapeStyleLayer(layer)) {
        syncShapeStylePresentation(layer.id);
      }
    }
  });
}

function getSelectedLayers() {
  return [...selectedLayerIds]
    .map((layerId) => getLayer(layerId))
    .filter(Boolean);
}

function getUnlockedSelectedLayers() {
  return getSelectedLayers().filter((layer) => !layer.locked);
}

function getTextStyleTargetLayers() {
  return getUnlockedSelectedLayers().filter((layer) => isTextStyleLayer(layer));
}

function getRotationTargetLayers() {
  return getUnlockedSelectedLayers().filter((layer) => isRotatableLayer(layer));
}

function getResizeTargetLayers() {
  return getUnlockedSelectedLayers();
}

function getPictoSizeTargetLayers() {
  return getUnlockedSelectedLayers().filter((layer) => layer.type === "picto");
}

function formatNumberControlValue(value) {
  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return "";
  }
  return String(Number(numericValue.toFixed(1)));
}

function clearSelection() {
  selectedLayerId = "";
  selectedLayerIds = new Set();
  selectedTitleTextTarget = "title";
  legendSelection = null;
  board.querySelectorAll("[data-layer-id]").forEach((element) => {
    element.classList.remove("is-selected");
  });
  renderLayers();
  refreshSelectedControls();
}

function selectAllLayers() {
  const visibleLayerIds = layers
    .filter((layer) => layer.visible && !isBannerLogoLayer(layer))
    .map((layer) => layer.id);

  if (!visibleLayerIds.length) {
    return;
  }

  selectedLayerIds = new Set(visibleLayerIds);
  selectedLayerId = visibleLayerIds[visibleLayerIds.length - 1];
  board.querySelectorAll("[data-layer-id]").forEach((element) => {
    element.classList.toggle("is-selected", selectedLayerIds.has(element.dataset.layerId));
  });
  if (selectedLayerId || selectedLayerIds.size) {
    activateMapPropertiesPanel();
  }
  renderLayers();
  refreshSelectedControls();
}

function updateZoom() {
  board.style.zoom = "";
  board.style.transform = `translate(${boardPanX}px, ${boardPanY}px) scale(${zoomLevel})`;
  zoomValue.textContent = `${Math.round((zoomLevel / ZOOM_BASELINE) * 100)} %`;
}

function getPointerDistance(firstPoint, secondPoint) {
  if (!firstPoint || !secondPoint) {
    return 0;
  }
  const deltaX = secondPoint.x - firstPoint.x;
  const deltaY = secondPoint.y - firstPoint.y;
  return Math.hypot(deltaX, deltaY);
}

function getPointerMidpoint(firstPoint, secondPoint) {
  if (!firstPoint || !secondPoint) {
    return { x: 0, y: 0 };
  }
  return {
    x: (firstPoint.x + secondPoint.x) / 2,
    y: (firstPoint.y + secondPoint.y) / 2,
  };
}

function startTouchViewportGesture() {
  if (!BOARD_PAN_ENABLED) {
    return;
  }
  if (!stage || touchViewportPointers.size < 2) {
    return;
  }

  const pointerIds = [...touchViewportPointers.keys()].slice(0, 2);
  const firstPoint = touchViewportPointers.get(pointerIds[0]);
  const secondPoint = touchViewportPointers.get(pointerIds[1]);
  const midpoint = getPointerMidpoint(firstPoint, secondPoint);
  const distance = getPointerDistance(firstPoint, secondPoint);
  if (!distance) {
    return;
  }

  const boardRect = board.getBoundingClientRect();
  touchViewportGesture = {
    pointerIds: new Set(pointerIds),
    startDistance: distance,
    startMidpointX: midpoint.x,
    startMidpointY: midpoint.y,
    anchorRelativeX: boardRect.width ? (midpoint.x - boardRect.left) / boardRect.width : 0.5,
    anchorRelativeY: boardRect.height ? (midpoint.y - boardRect.top) / boardRect.height : 0.5,
    startZoom: zoomLevel,
    startPanX: boardPanX,
    startPanY: boardPanY,
  };

  interaction = null;
  panInteraction = null;
  stage.classList.add("is-panning");
}

function updateTouchViewportGesture(event) {
  if (!BOARD_PAN_ENABLED) {
    if (touchViewportPointers.size) {
      touchViewportPointers.clear();
    }
    if (touchViewportGesture) {
      touchViewportGesture = null;
    }
    stage?.classList.remove("is-panning");
    return false;
  }
  if (event.pointerType !== "touch" || !touchViewportPointers.has(event.pointerId)) {
    return false;
  }

  touchViewportPointers.set(event.pointerId, {
    x: event.clientX,
    y: event.clientY,
  });

  if (!touchViewportGesture) {
    if (touchViewportPointers.size >= 2) {
      startTouchViewportGesture();
    }
    return false;
  }

  const [firstId, secondId] = [...touchViewportGesture.pointerIds];
  const firstPoint = touchViewportPointers.get(firstId);
  const secondPoint = touchViewportPointers.get(secondId);
  if (!firstPoint || !secondPoint) {
    return false;
  }

  event.preventDefault();
  const midpoint = getPointerMidpoint(firstPoint, secondPoint);
  const currentDistance = getPointerDistance(firstPoint, secondPoint);
  const zoomRatio = touchViewportGesture.startDistance
    ? currentDistance / touchViewportGesture.startDistance
    : 1;
  const nextZoom = clamp(
    touchViewportGesture.startZoom * zoomRatio,
    ZOOM_MIN,
    ZOOM_MAX,
  );

  boardPanX = touchViewportGesture.startPanX + (midpoint.x - touchViewportGesture.startMidpointX);
  boardPanY = touchViewportGesture.startPanY + (midpoint.y - touchViewportGesture.startMidpointY);
  zoomLevel = nextZoom;
  updateZoom();

  const boardRectAfter = board.getBoundingClientRect();
  const anchorAfterX = boardRectAfter.left + (touchViewportGesture.anchorRelativeX * boardRectAfter.width);
  const anchorAfterY = boardRectAfter.top + (touchViewportGesture.anchorRelativeY * boardRectAfter.height);
  boardPanX += midpoint.x - anchorAfterX;
  boardPanY += midpoint.y - anchorAfterY;
  updateZoom();
  return true;
}

function endTouchViewportPointer(event) {
  if (!BOARD_PAN_ENABLED) {
    touchViewportPointers.clear();
    touchViewportGesture = null;
    stage?.classList.remove("is-panning");
    return;
  }
  if (event.pointerType !== "touch" || !stage) {
    return;
  }

  touchViewportPointers.delete(event.pointerId);
  if (stage.hasPointerCapture && stage.hasPointerCapture(event.pointerId)) {
    stage.releasePointerCapture(event.pointerId);
  }

  if (touchViewportGesture && touchViewportGesture.pointerIds.has(event.pointerId)) {
    touchViewportGesture = null;
    if (touchViewportPointers.size >= 2) {
      startTouchViewportGesture();
      return;
    }
  }

  if (touchViewportPointers.size < 2) {
    touchViewportGesture = null;
    stage.classList.remove("is-panning");
  }
}

function supportsTouchKeyboardUi() {
  return true;
}

function mountTouchKeyboardToFullscreenHost() {
  if (!fullscreenHost) {
    return;
  }

  if (touchKeyboardToggle && touchKeyboardToggle.parentElement !== fullscreenHost) {
    fullscreenHost.appendChild(touchKeyboardToggle);
  }

  if (touchKeyboard && touchKeyboard.parentElement !== fullscreenHost) {
    fullscreenHost.appendChild(touchKeyboard);
  }
}

function isTouchKeyboardTargetInput(node) {
  return node instanceof HTMLInputElement &&
    TOUCH_KEYBOARD_TARGET_INPUT_IDS.has(node.id) &&
    !node.disabled;
}

function getTouchKeyboardInputCandidates() {
  return [selectedText, titleInput, subtitleInput, legendSelectedText].filter((input) => input instanceof HTMLInputElement);
}

function getTouchKeyboardTargetLabel(input) {
  const labels = {
    titleInput: "Titre de la carte",
    subtitleInput: "Sous-titre",
    selectedText: "Texte selectionne",
    legendSelectedText: "Texte de legende",
  };
  return labels[input?.id] || "Champ texte";
}

function updateTouchKeyboardTargetLabel() {
  if (!touchKeyboardTarget) {
    return;
  }
  if (!touchKeyboardActiveInput || !isTouchKeyboardTargetInput(touchKeyboardActiveInput)) {
    touchKeyboardTarget.textContent = "Selectionnez un champ texte.";
    return;
  }
  touchKeyboardTarget.textContent = `Champ actif : ${getTouchKeyboardTargetLabel(touchKeyboardActiveInput)}`;
}

function setTouchKeyboardActiveInput(input) {
  if (!isTouchKeyboardTargetInput(input)) {
    return false;
  }
  touchKeyboardActiveInput = input;
  updateTouchKeyboardTargetLabel();
  return true;
}

function resolveTouchKeyboardInput() {
  if (isTouchKeyboardTargetInput(touchKeyboardActiveInput)) {
    return touchKeyboardActiveInput;
  }

  const focused = document.activeElement;
  if (isTouchKeyboardTargetInput(focused)) {
    touchKeyboardActiveInput = focused;
    updateTouchKeyboardTargetLabel();
    return focused;
  }

  const fallback = getTouchKeyboardInputCandidates().find((input) => isTouchKeyboardTargetInput(input));
  if (fallback) {
    touchKeyboardActiveInput = fallback;
    updateTouchKeyboardTargetLabel();
    return fallback;
  }

  return null;
}

function setTouchKeyboardFloatingPosition(leftPx, topPx) {
  if (!touchKeyboard) {
    return;
  }

  const rect = touchKeyboard.getBoundingClientRect();
  const width = rect.width || touchKeyboard.offsetWidth || 0;
  const height = rect.height || touchKeyboard.offsetHeight || 0;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth || width;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight || height;
  const safeMargin = 4;
  const maxLeft = Math.max(safeMargin, viewportWidth - width - safeMargin);
  const maxTop = Math.max(safeMargin, viewportHeight - height - safeMargin);
  const clampedLeft = clamp(leftPx, safeMargin, maxLeft);
  const clampedTop = clamp(topPx, safeMargin, maxTop);

  touchKeyboard.style.left = `${clampedLeft}px`;
  touchKeyboard.style.top = `${clampedTop}px`;
  touchKeyboard.style.right = "auto";
  touchKeyboard.style.bottom = "auto";
  touchKeyboard.style.transform = "none";
  touchKeyboard.classList.add("is-floating");
}

function constrainTouchKeyboardInViewport() {
  if (!touchKeyboard || touchKeyboard.hidden || !touchKeyboard.classList.contains("is-floating")) {
    return;
  }

  const rect = touchKeyboard.getBoundingClientRect();
  setTouchKeyboardFloatingPosition(rect.left, rect.top);
}

function startTouchKeyboardDrag(event) {
  if (!touchKeyboard || touchKeyboard.hidden || !touchKeyboardHead) {
    return;
  }

  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest("button")) {
    return;
  }

  const rect = touchKeyboard.getBoundingClientRect();
  touchKeyboardDragState = {
    pointerId: event.pointerId,
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
  };

  if (touchKeyboardHead.setPointerCapture) {
    try {
      touchKeyboardHead.setPointerCapture(event.pointerId);
    } catch (error) {
      // Some browser contexts may reject pointer capture.
    }
  }

  touchKeyboard.classList.add("is-dragging");
  event.preventDefault();
}

function updateTouchKeyboardDrag(event) {
  if (!touchKeyboardDragState || event.pointerId !== touchKeyboardDragState.pointerId) {
    return;
  }

  setTouchKeyboardFloatingPosition(
    event.clientX - touchKeyboardDragState.offsetX,
    event.clientY - touchKeyboardDragState.offsetY,
  );
  event.preventDefault();
}

function endTouchKeyboardDrag(event) {
  if (!touchKeyboardDragState || !touchKeyboard || event.pointerId !== touchKeyboardDragState.pointerId) {
    return;
  }

  if (touchKeyboardHead?.hasPointerCapture?.(event.pointerId)) {
    try {
      touchKeyboardHead.releasePointerCapture(event.pointerId);
    } catch (error) {
      // Some browser contexts may reject pointer capture release.
    }
  }

  touchKeyboardDragState = null;
  touchKeyboard.classList.remove("is-dragging");
}

function showTouchKeyboard() {
  if (!touchKeyboard) {
    return;
  }
  touchKeyboard.hidden = false;
  touchKeyboard.classList.add("is-open");
  requestAnimationFrame(constrainTouchKeyboardInViewport);
}

function hideTouchKeyboard() {
  if (!touchKeyboard) {
    return;
  }
  touchKeyboardDragState = null;
  touchKeyboard.hidden = true;
  touchKeyboard.classList.remove("is-dragging");
  touchKeyboard.classList.remove("is-open");
  touchKeyboardShiftEnabled = false;
  refreshTouchKeyboardKeys();
}

function buildTouchKeyboardKeys() {
  if (!touchKeyboardRows) {
    return;
  }

  touchKeyboardRows.innerHTML = "";
  TOUCH_KEYBOARD_LAYOUT.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "carto-touch-keyboard__row";
    row.forEach((key) => {
      const keyButton = document.createElement("button");
      keyButton.type = "button";
      keyButton.className = "carto-touch-keyboard__key";
      keyButton.dataset.key = key;
      keyButton.textContent = key;
      rowElement.appendChild(keyButton);
    });
    touchKeyboardRows.appendChild(rowElement);
  });
}

function refreshTouchKeyboardKeys() {
  if (touchKeyboardRows) {
    touchKeyboardRows.querySelectorAll(".carto-touch-keyboard__key").forEach((button) => {
      const key = button.dataset.key || "";
      const isLetter = key.length === 1 && /[a-z]/i.test(key);
      button.textContent = touchKeyboardShiftEnabled && isLetter ? key.toUpperCase() : key;
    });
  }
  if (touchKeyboardShiftButton) {
    touchKeyboardShiftButton.classList.toggle("is-active", touchKeyboardShiftEnabled);
    touchKeyboardShiftButton.setAttribute("aria-pressed", String(touchKeyboardShiftEnabled));
  }
}

function emitTouchKeyboardInputEvent(input) {
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

function insertTouchKeyboardText(text) {
  const input = resolveTouchKeyboardInput();
  if (!input) {
    return;
  }

  const start = typeof input.selectionStart === "number" ? input.selectionStart : input.value.length;
  const end = typeof input.selectionEnd === "number" ? input.selectionEnd : input.value.length;
  const nextValue = `${input.value.slice(0, start)}${text}${input.value.slice(end)}`;
  input.value = nextValue;
  const cursor = start + text.length;
  try {
    input.setSelectionRange(cursor, cursor);
  } catch (error) {
    // Some browser/input combinations may not expose selection APIs.
  }
  input.focus({ preventScroll: true });
  emitTouchKeyboardInputEvent(input);
}

function deleteTouchKeyboardBackward() {
  const input = resolveTouchKeyboardInput();
  if (!input) {
    return;
  }

  const start = typeof input.selectionStart === "number" ? input.selectionStart : input.value.length;
  const end = typeof input.selectionEnd === "number" ? input.selectionEnd : input.value.length;
  if (start === 0 && end === 0) {
    return;
  }

  let nextStart = start;
  let nextValue = input.value;
  if (start !== end) {
    nextValue = `${input.value.slice(0, start)}${input.value.slice(end)}`;
  } else {
    nextStart = Math.max(0, start - 1);
    nextValue = `${input.value.slice(0, nextStart)}${input.value.slice(end)}`;
  }

  input.value = nextValue;
  try {
    input.setSelectionRange(nextStart, nextStart);
  } catch (error) {
    // Some browser/input combinations may not expose selection APIs.
  }
  input.focus({ preventScroll: true });
  emitTouchKeyboardInputEvent(input);
}

function clearTouchKeyboardInput() {
  const input = resolveTouchKeyboardInput();
  if (!input) {
    return;
  }
  input.value = "";
  try {
    input.setSelectionRange(0, 0);
  } catch (error) {
    // Some browser/input combinations may not expose selection APIs.
  }
  input.focus({ preventScroll: true });
  emitTouchKeyboardInputEvent(input);
}

function pressTouchKeyboardKey(baseKey) {
  const isLetter = baseKey.length === 1 && /[a-z]/i.test(baseKey);
  const key = touchKeyboardShiftEnabled && isLetter ? baseKey.toUpperCase() : baseKey;
  insertTouchKeyboardText(key);
  if (touchKeyboardShiftEnabled && isLetter) {
    touchKeyboardShiftEnabled = false;
    refreshTouchKeyboardKeys();
  }
}

function initializeTouchKeyboard() {
  if (!touchKeyboard || !touchKeyboardRows) {
    return;
  }

  mountTouchKeyboardToFullscreenHost();
  buildTouchKeyboardKeys();
  refreshTouchKeyboardKeys();
  updateTouchKeyboardTargetLabel();

  const touchEnabled = supportsTouchKeyboardUi();
  if (touchKeyboardToggle) {
    touchKeyboardToggle.hidden = !touchEnabled;
  }
  if (!touchEnabled) {
    hideTouchKeyboard();
    return;
  }

  touchKeyboardHead?.addEventListener("pointerdown", startTouchKeyboardDrag);
  document.addEventListener("pointermove", updateTouchKeyboardDrag);
  document.addEventListener("pointerup", endTouchKeyboardDrag);
  document.addEventListener("pointercancel", endTouchKeyboardDrag);
  window.addEventListener("resize", constrainTouchKeyboardInViewport);

  getTouchKeyboardInputCandidates().forEach((input) => {
    input.addEventListener("focus", () => {
      if (!supportsTouchKeyboardUi()) {
        return;
      }
      setTouchKeyboardActiveInput(input);
    });
    input.addEventListener("pointerdown", (event) => {
      if (event.pointerType !== "touch") {
        return;
      }
      setTouchKeyboardActiveInput(input);
    });
  });

  touchKeyboardRows.addEventListener("pointerdown", (event) => {
    if (event.target instanceof Element && event.target.closest(".carto-touch-keyboard__key")) {
      event.preventDefault();
    }
  });

  touchKeyboardRows.addEventListener("click", (event) => {
    const keyButton = event.target instanceof Element
      ? event.target.closest(".carto-touch-keyboard__key")
      : null;
    if (!keyButton) {
      return;
    }
    const key = keyButton.dataset.key || "";
    if (!key) {
      return;
    }
    pressTouchKeyboardKey(key);
  });

  touchKeyboardShiftButton?.addEventListener("pointerdown", (event) => event.preventDefault());
  touchKeyboardShiftButton?.addEventListener("click", () => {
    touchKeyboardShiftEnabled = !touchKeyboardShiftEnabled;
    refreshTouchKeyboardKeys();
  });

  touchKeyboardBackspaceButton?.addEventListener("pointerdown", (event) => event.preventDefault());
  touchKeyboardBackspaceButton?.addEventListener("click", () => {
    deleteTouchKeyboardBackward();
  });

  touchKeyboardSpaceButton?.addEventListener("pointerdown", (event) => event.preventDefault());
  touchKeyboardSpaceButton?.addEventListener("click", () => {
    insertTouchKeyboardText(" ");
  });

  touchKeyboardClearButton?.addEventListener("pointerdown", (event) => event.preventDefault());
  touchKeyboardClearButton?.addEventListener("click", () => {
    clearTouchKeyboardInput();
  });

  touchKeyboardClose?.addEventListener("click", hideTouchKeyboard);

  touchKeyboardToggle?.addEventListener("click", () => {
    if (touchKeyboard.hidden) {
      const input = resolveTouchKeyboardInput();
      if (!input) {
        updateStatusMessage("Selectionnez d'abord un champ texte (titre ou texte libre).");
        return;
      }
      showTouchKeyboard();
      input.focus({ preventScroll: true });
      return;
    }
    hideTouchKeyboard();
  });

  document.addEventListener("pointerdown", (event) => {
    if (event.pointerType !== "touch" || touchKeyboard.hidden) {
      return;
    }
    if (!(event.target instanceof Element)) {
      return;
    }
    if (event.target.closest("#touchKeyboard") || event.target.closest("#touchKeyboardToggle")) {
      return;
    }
    if (isTouchKeyboardTargetInput(event.target)) {
      return;
    }
    hideTouchKeyboard();
  });
}

function startPanInteraction(event) {
  if (!BOARD_PAN_ENABLED) {
    clearPanInteractionState();
    touchViewportPointers.clear();
    touchViewportGesture = null;
    return;
  }
  // If an element interaction already started on pointerdown, never start board panning.
  if (interaction) {
    return;
  }

  const target = event.target instanceof Element ? event.target : null;
  if (target?.closest(".resize-handle, .carto-legend-resizer, .carto-legend-panel")) {
    return;
  }

  const layerTarget = target?.closest("[data-layer-id]") || null;
  const targetLayer = layerTarget ? getLayer(layerTarget.dataset.layerId || "") : null;
  const isEditableLayerTarget = Boolean(targetLayer && targetLayer.type !== "map");

  if (event.pointerType === "touch") {
    if (!stage) {
      return;
    }

    // Keep touch interactions for element move/resize; only stage/map touches drive board gesture.
    if (isEditableLayerTarget) {
      return;
    }

    touchViewportPointers.set(event.pointerId, {
      x: event.clientX,
      y: event.clientY,
    });
    if (stage.setPointerCapture) {
      stage.setPointerCapture(event.pointerId);
    }
    if (touchViewportPointers.size >= 2) {
      event.preventDefault();
      startTouchViewportGesture();
      return;
    }

    event.preventDefault();
    panInteraction = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startPanX: boardPanX,
      startPanY: boardPanY,
    };
    stage.classList.add("is-panning");
    return;
  }

  const canPanWithMouseButton = event.button === 1 || event.button === 2;
  const canPanWithLeftButton = (
    event.button === 0 &&
    !event.altKey &&
    !event.ctrlKey &&
    !event.metaKey &&
    !event.shiftKey
  );
  if (!stage || (!canPanWithMouseButton && !canPanWithLeftButton)) {
    return;
  }

  if (canPanWithLeftButton && isEditableLayerTarget) {
    return;
  }

  if (canPanWithLeftButton && interaction) {
    return;
  }

  event.preventDefault();
  panInteraction = {
    pointerId: event.pointerId,
    startX: event.clientX,
    startY: event.clientY,
    startPanX: boardPanX,
    startPanY: boardPanY,
  };
  stage.classList.add("is-panning");
  if (stage.setPointerCapture) {
    stage.setPointerCapture(event.pointerId);
  }
}

function updatePanInteraction(event) {
  if (!BOARD_PAN_ENABLED) {
    return false;
  }
  if (!panInteraction || event.pointerId !== panInteraction.pointerId) {
    return false;
  }

  const deltaX = event.clientX - panInteraction.startX;
  const deltaY = event.clientY - panInteraction.startY;
  boardPanX = panInteraction.startPanX + deltaX;
  boardPanY = panInteraction.startPanY + deltaY;
  updateZoom();
  return true;
}

function endPanInteraction(event) {
  if (!panInteraction || !stage) {
    return;
  }

  if (
    event?.pointerId !== undefined &&
    stage.hasPointerCapture &&
    stage.hasPointerCapture(event.pointerId)
  ) {
    stage.releasePointerCapture(event.pointerId);
  }
  panInteraction = null;
  stage.classList.remove("is-panning");
}

function clearPanInteractionState() {
  if (!panInteraction) {
    if (stage) {
      stage.classList.remove("is-panning");
    }
    return;
  }

  if (stage?.hasPointerCapture?.(panInteraction.pointerId)) {
    try {
      stage.releasePointerCapture(panInteraction.pointerId);
    } catch (error) {
      // Ignore capture release errors and still reset pan state.
    }
  }
  panInteraction = null;
  stage?.classList.remove("is-panning");
}

function onStageWheelZoom(event) {
  if (!stage) {
    return;
  }

  event.preventDefault();
  const delta = Number(event.deltaY) || 0;
  if (!delta) {
    return;
  }

  const boardRectBefore = board.getBoundingClientRect();
  const relativeX = boardRectBefore.width
    ? (event.clientX - boardRectBefore.left) / boardRectBefore.width
    : 0.5;
  const relativeY = boardRectBefore.height
    ? (event.clientY - boardRectBefore.top) / boardRectBefore.height
    : 0.5;

  const direction = delta < 0 ? 1 : -1;
  const nextZoom = clamp(zoomLevel + (direction * ZOOM_STEP), ZOOM_MIN, ZOOM_MAX);
  if (Math.abs(nextZoom - zoomLevel) < 0.0001) {
    return;
  }

  zoomLevel = nextZoom;
  updateZoom();

  const boardRectAfter = board.getBoundingClientRect();
  const anchorAfterX = boardRectAfter.left + (relativeX * boardRectAfter.width);
  const anchorAfterY = boardRectAfter.top + (relativeY * boardRectAfter.height);
  boardPanX += event.clientX - anchorAfterX;
  boardPanY += event.clientY - anchorAfterY;
  updateZoom();
}

function initializeMouseViewportControls() {
  if (!stage) {
    return;
  }

  stage.addEventListener("wheel", onStageWheelZoom, { passive: false });
  stage.addEventListener("pointerdown", startPanInteraction);
  stage.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });
}

function selectLayer(layerId, options = {}) {
  const { additive = false, titleTextTarget = "title" } = options;
  legendSelection = null;
  selectedLayerId = layerId;
  if (layerId === "title-base") {
    selectedTitleTextTarget = titleTextTarget === "subtitle" ? "subtitle" : "title";
  } else {
    selectedTitleTextTarget = "title";
  }
  if (additive) {
    if (selectedLayerIds.has(layerId)) {
      selectedLayerIds.delete(layerId);
      if (!selectedLayerIds.size) {
        selectedLayerId = "";
      } else if (selectedLayerId === layerId) {
        selectedLayerId = [...selectedLayerIds][selectedLayerIds.size - 1] || "";
      }
    } else {
      selectedLayerIds.add(layerId);
      selectedLayerId = layerId;
    }
  } else {
    selectedLayerIds = new Set([layerId]);
  }
  board.querySelectorAll("[data-layer-id]").forEach((element) => {
    element.classList.toggle("is-selected", selectedLayerIds.has(element.dataset.layerId));
  });
  if (selectedLayerId || selectedLayerIds.size) {
    activateMapPropertiesPanel();
  }
  renderLayers();
  refreshSelectedControls();
}

function refreshLayerCount() {
  layerCount.textContent = `${layers.filter((layer) => isLayerListed(layer)).length} éléments`;
}

function getLegendSymbolClass(layerType) {
  if (layerType === "picto") {
    return "carto-legend-symbol carto-legend-symbol--point";
  }

  if (layerType === "north") {
    return "carto-legend-symbol carto-legend-symbol--area";
  }

  return "carto-legend-symbol carto-legend-symbol--line";
}

function getDefaultLegendTextStyle() {
  return {
    fontSize: 13,
    textColor: "#161616",
    backgroundColor: "#ffffff",
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "600",
    fontStyle: "normal",
    bgTransparent: false,
  };
}

function getDefaultLegendTitleStyle() {
  return {
    fontSize: 13,
    textColor: "#ffffff",
    backgroundColor: "#000091",
    fontFamily: "Marianne, Arial, sans-serif",
    fontWeight: "700",
    fontStyle: "normal",
    bgTransparent: false,
  };
}

function createLegendSection(title, type = "custom", options = {}) {
  legendSectionCounter += 1;
  return {
    id: `legend-section-${legendSectionCounter}`,
    type,
    title,
    groupKey: options.groupKey || "",
    autoManaged: options.autoManaged === true,
    items: [],
    titleStyle: getDefaultLegendTitleStyle(),
    itemStyle: getDefaultLegendTextStyle(),
    bodyBackground: "#ffffff",
    columns: 1,
    symbolSize: 20,
  };
}

function styleLegendSymbolElement(symbol, layerType, size) {
  const safeSize = clamp(Number(size) || 20, 10, 44);

  if (layerType === "picto") {
    symbol.style.width = `${safeSize}px`;
    symbol.style.height = `${safeSize}px`;
    return;
  }

  if (layerType === "north") {
    const half = Math.round(safeSize * 0.42);
    symbol.style.width = "0";
    symbol.style.height = "0";
    symbol.style.borderLeftWidth = `${half}px`;
    symbol.style.borderRightWidth = `${half}px`;
    symbol.style.borderBottomWidth = `${safeSize}px`;
    return;
  }

  symbol.style.width = `${safeSize}px`;
  symbol.style.height = `${Math.max(2, Math.round(safeSize * 0.14))}px`;
}

function getLegendEntries() {
  const visibleLegendLayers = layers.filter((layer) => (
    layer.visible &&
    layer.type === "picto" &&
    layer.excludeFromLegend !== true &&
    isFullyInsideMapArea(layer.id)
  ));
  const uniqueLegendLayers = [];
  const seen = new Set();

  visibleLegendLayers.forEach((layer) => {
    const key = layer.type === "picto"
      ? `picto:${layer.label}:${layer.src || ""}`
      : `${layer.type}:${getLayerLabel(layer)}`;

    if (seen.has(key)) {
      return;
    }

    seen.add(key);
    const explicitGroupKey = String(layer.groupKey || "").trim();
    const explicitGroupTitle = String(layer.groupTitle || "").trim();
    const fallbackGroup = getPictoGroupDescriptor(
      {
        label: layer.label,
        group: explicitGroupKey,
        category: explicitGroupTitle,
      },
      layer.pictoKey || layer.label,
    );
    uniqueLegendLayers.push({
      key,
      layerType: layer.type,
      label: getLayerLabel(layer),
      src: layer.src || "",
      groupKey: explicitGroupKey || fallbackGroup.key,
      groupTitle: explicitGroupTitle || fallbackGroup.title,
    });
  });

  return uniqueLegendLayers;
}

function isLegacyLegendPlaceholder(section) {
  return Boolean(
    section
    && section.type === "picto"
    && !String(section.groupKey || "").trim()
    && normalizeSearchText(section.title || "") === "rubrique",
  );
}

function findLegendSectionByGroupKey(groupKey = "") {
  const safeGroupKey = String(groupKey || "").trim();
  if (!safeGroupKey) {
    return null;
  }
  return legendSectionsState.find((section) => String(section.groupKey || "").trim() === safeGroupKey) || null;
}

function ensureLegendBaseSections() {
  legendSectionsState = legendSectionsState.filter((section) => section && typeof section === "object");
}

function ensureLegendGroupSection(groupKey = "", groupTitle = "Rubrique") {
  const safeGroupKey = String(groupKey || "").trim();
  if (!safeGroupKey) {
    return null;
  }

  const existingSection = findLegendSectionByGroupKey(safeGroupKey);
  if (existingSection) {
    existingSection.type = "picto-group";
    existingSection.groupKey = safeGroupKey;
    existingSection.autoManaged = true;
    if (!String(existingSection.title || "").trim()) {
      existingSection.title = groupTitle || "Rubrique";
    }
    return existingSection;
  }

  const legacyPlaceholder = legendSectionsState.find((section) => isLegacyLegendPlaceholder(section));
  if (legacyPlaceholder) {
    legacyPlaceholder.type = "picto-group";
    legacyPlaceholder.groupKey = safeGroupKey;
    legacyPlaceholder.autoManaged = true;
    legacyPlaceholder.title = groupTitle || "Rubrique";
    return legacyPlaceholder;
  }

  const nextSection = createLegendSection(groupTitle || "Rubrique", "picto-group", {
    groupKey: safeGroupKey,
    autoManaged: true,
  });
  legendSectionsState.push(nextSection);
  return nextSection;
}

function getSectionByType(type) {
  return legendSectionsState.find((section) => section.type === type);
}

function syncLegendSectionsWithVisibleEntries() {
  legendSectionsState = legendSectionsState.filter((section) => section.type !== "north");
  ensureLegendBaseSections();

  const entries = getLegendEntries();
  const groupDescriptors = [];
  const seenGroupKeys = new Set();
  entries.forEach((entry) => {
    const entryGroupKey = String(entry.groupKey || "").trim();
    if (!entryGroupKey || seenGroupKeys.has(entryGroupKey)) {
      return;
    }
    seenGroupKeys.add(entryGroupKey);
    groupDescriptors.push({
      key: entryGroupKey,
      title: String(entry.groupTitle || "").trim() || getPictoGroupByKey(entryGroupKey)?.title || "Rubrique",
    });
  });

  groupDescriptors.forEach((groupDescriptor) => {
    ensureLegendGroupSection(groupDescriptor.key, groupDescriptor.title);
  });

  const entryMap = new Map(entries.map((entry) => [entry.key, entry]));
  const alreadyAssigned = new Set();

  legendSectionsState.forEach((section) => {
    section.items = section.items.filter((item) => {
      const matchingEntry = entryMap.get(item.key);
      if (!matchingEntry) {
        return false;
      }
      if (alreadyAssigned.has(item.key)) {
        return false;
      }
      alreadyAssigned.add(item.key);
      return true;
    });
  });

  entries.forEach((entry) => {
    if (alreadyAssigned.has(entry.key)) {
      return;
    }

    const targetSection = findLegendSectionByGroupKey(entry.groupKey)
      || ensureLegendGroupSection(entry.groupKey, entry.groupTitle)
      || getSectionByType(entry.layerType)
      || legendSectionsState[0];
    if (!targetSection) {
      return;
    }
    targetSection.items.push(entry);
  });

  legendSectionsState = legendSectionsState.filter((section) => {
    if (!(section.autoManaged === true && String(section.groupKey || "").trim())) {
      return true;
    }
    return section.items.length > 0;
  });

  if (legendSelection && legendSelection.sectionId) {
    const selectedSection = legendSectionsState.find((section) => section.id === legendSelection.sectionId);
    if (!selectedSection) {
      legendSelection = null;
    } else if (
      legendSelection.kind === "item-label"
      && legendSelection.itemKey
      && !selectedSection.items.some((item) => item.key === legendSelection.itemKey)
    ) {
      legendSelection = { kind: "section-title", sectionId: selectedSection.id };
    }
  }
}

function setLegendSelection(selection) {
  legendSelection = selection;
  setActiveSidePanel("legendManagerPanel");
  selectedLayerId = "";
  selectedLayerIds = new Set();
  selectedTitleTextTarget = "title";
  board.querySelectorAll("[data-layer-id]").forEach((element) => {
    element.classList.remove("is-selected");
  });
  renderLayers();
  refreshSelectedControls();
  renderLegend();
  if (legendSelectedText && !legendSelectedText.disabled) {
    requestAnimationFrame(() => {
      legendSelectedText.focus();
      legendSelectedText.select();
    });
  }
}

function getLegendSelectionStyleState() {
  if (!legendSelection) {
    return null;
  }

  const section = legendSectionsState.find((item) => item.id === legendSelection.sectionId);
  if (!section) {
    return null;
  }

  if (legendSelection.kind === "section-title") {
    return { ...section.titleStyle };
  }

  if (legendSelection.kind === "section-body") {
    return {
      ...section.itemStyle,
      backgroundColor: section.bodyBackground,
    };
  }

  if (legendSelection.kind === "item-label") {
    return { ...section.itemStyle };
  }

  return null;
}

function updateLegendSelectionText(value) {
  if (!legendSelection) {
    return;
  }

  const section = legendSectionsState.find((item) => item.id === legendSelection.sectionId);
  if (!section) {
    return;
  }
  pushHistory();

  if (legendSelection.kind === "section-title") {
    section.title = value || "Sans titre";
  }

  if (legendSelection.kind === "item-label" && legendSelection.itemKey) {
    const item = section.items.find((entry) => entry.key === legendSelection.itemKey);
    if (item) {
      item.label = value || item.label;
    }
  }

  renderLegend();
  refreshSelectedControls();
}

function updateLegendSelectionStyle(nextStyle) {
  if (!legendSelection) {
    return;
  }

  const section = legendSectionsState.find((item) => item.id === legendSelection.sectionId);
  if (!section) {
    return;
  }
  pushHistory();

  if (legendSelection.kind === "section-title") {
    section.titleStyle = { ...section.titleStyle, ...nextStyle };
  }

  if (legendSelection.kind === "item-label") {
    section.itemStyle = { ...section.itemStyle, ...nextStyle };
  }

  if (legendSelection.kind === "section-body") {
    if (nextStyle.backgroundColor) {
      section.bodyBackground = nextStyle.backgroundColor;
    }
    section.itemStyle = { ...section.itemStyle, ...nextStyle };
  }

  renderLegend();
  refreshSelectedControls();
}

function moveLegendItem(itemKey, targetSectionId, targetIndex = -1) {
  let sourceSection = null;
  let sourceIndex = -1;
  legendSectionsState.forEach((section) => {
    const index = section.items.findIndex((item) => item.key === itemKey);
    if (index !== -1) {
      sourceSection = section;
      sourceIndex = index;
    }
  });

  const targetSection = legendSectionsState.find((section) => section.id === targetSectionId);
  if (!sourceSection || !targetSection || sourceIndex === -1) {
    return;
  }

  const [item] = sourceSection.items.splice(sourceIndex, 1);
  if (targetIndex < 0 || targetIndex > targetSection.items.length) {
    targetSection.items.push(item);
  } else {
    targetSection.items.splice(targetIndex, 0, item);
  }
}

function getLegendGroups() {
  syncLegendSectionsWithVisibleEntries();
  return legendSectionsState;
}

function renderLegend() {
  const groups = getLegendGroups();
  legendSections.innerHTML = "";
  legendHint.textContent = "";
  legendHint.hidden = true;

  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "carto-legend-section";
    section.dataset.sectionId = group.id;

    const titleRow = document.createElement("div");
    titleRow.className = "carto-legend-section__title-row";

    const title = document.createElement("div");
    title.className = "carto-legend-section__title";
    title.textContent = group.title;
    title.style.fontSize = `${group.titleStyle.fontSize}px`;
    title.style.color = group.titleStyle.textColor;
    title.style.backgroundColor = group.titleStyle.bgTransparent ? "transparent" : group.titleStyle.backgroundColor;
    title.style.fontFamily = group.titleStyle.fontFamily;
    title.style.fontWeight = group.titleStyle.fontWeight;
    title.style.fontStyle = group.titleStyle.fontStyle;
    title.addEventListener("click", () => setLegendSelection({ kind: "section-title", sectionId: group.id }));
    title.addEventListener("dblclick", (event) => {
      event.stopPropagation();
      pushHistory();
      const nextTitle = prompt("Modifier le titre du sous-bloc :", group.title);
      if (nextTitle === null) {
        return;
      }
      group.title = (nextTitle || "").trim() || "Sans titre";
      setLegendSelection({ kind: "section-title", sectionId: group.id });
      renderLegend();
      refreshSelectedControls();
    });
    if (legendSelection?.kind === "section-title" && legendSelection.sectionId === group.id) {
      title.classList.add("is-selected");
    }

    titleRow.append(title);

    const body = document.createElement("div");
    body.className = "carto-legend-section__body";
    body.style.backgroundColor = group.bodyBackground;
    body.addEventListener("click", (event) => {
      if (event.target === body) {
        setLegendSelection({ kind: "section-title", sectionId: group.id });
      }
    });
    if (legendSelection?.kind === "section-body" && legendSelection.sectionId === group.id) {
      body.classList.add("is-selected");
    }
    body.addEventListener("dragover", (event) => {
      event.preventDefault();
      section.classList.add("is-drop-target");
    });
    body.addEventListener("dragleave", () => {
      section.classList.remove("is-drop-target");
    });
    body.addEventListener("drop", (event) => {
      event.preventDefault();
      section.classList.remove("is-drop-target");
      if (!draggedLegendItem) {
        return;
      }
      pushHistory();
      moveLegendItem(draggedLegendItem.itemKey, group.id);
      draggedLegendItem = null;
      renderLegend();
    });

    const list = document.createElement("ul");
    list.className = "carto-legend-list";
    const columns = clamp(Number(group.columns) || 1, 1, 6);
    const symbolSize = clamp(Number(group.symbolSize) || 20, 10, 44);
    list.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;

    group.items.forEach((itemEntry) => {
      const item = document.createElement("li");
      item.draggable = true;
      item.dataset.itemKey = itemEntry.key;
      item.addEventListener("dragstart", () => {
        draggedLegendItem = { itemKey: itemEntry.key };
      });
      item.addEventListener("dragend", () => {
        draggedLegendItem = null;
        section.classList.remove("is-drop-target");
      });

      let symbol;
      if (itemEntry.layerType === "picto" && itemEntry.src) {
        symbol = document.createElement("img");
        symbol.className = "carto-legend-picto";
        symbol.src = itemEntry.src;
        symbol.alt = itemEntry.label;
      } else {
        symbol = document.createElement("span");
        symbol.className = getLegendSymbolClass(itemEntry.layerType);
      }
      styleLegendSymbolElement(symbol, itemEntry.layerType, symbolSize);
      item.style.gridTemplateColumns = `${symbolSize}px minmax(0, 1fr)`;

      const label = document.createElement("span");
      label.className = "carto-legend-label";
      label.textContent = itemEntry.label;
      label.style.fontSize = `${group.itemStyle.fontSize}px`;
      label.style.color = group.itemStyle.textColor;
      label.style.fontFamily = group.itemStyle.fontFamily;
      label.style.fontWeight = group.itemStyle.fontWeight;
      label.style.fontStyle = group.itemStyle.fontStyle;
      item.addEventListener("click", (event) => {
        event.stopPropagation();
        setLegendSelection({ kind: "item-label", sectionId: group.id, itemKey: itemEntry.key });
      });
      if (legendSelection?.kind === "item-label" && legendSelection.sectionId === group.id && legendSelection.itemKey === itemEntry.key) {
        item.classList.add("is-selected");
      }

      item.append(symbol, label);
      list.appendChild(item);
    });

    body.appendChild(list);
    section.append(titleRow, body);
    legendSections.appendChild(section);
  });
}

function renderLayers() {
  layersList.innerHTML = "";

  const listedLayers = [...layers].reverse().filter((layer) => {
    if (!isLayerListed(layer)) {
      return false;
    }
    if (layer.type === "picto") {
      return isFullyInsideMapArea(layer.id);
    }
    return true;
  });

  const list = document.createElement("div");
  list.className = "layer-group__list layer-group__list--single";

  if (!listedLayers.length) {
    const empty = document.createElement("p");
    empty.className = "layer-group__empty";
    empty.textContent = "Aucun element a afficher.";
    list.appendChild(empty);
  }

  listedLayers.forEach((layer) => {
    const row = document.createElement("div");
    row.className = "layer-row";
    row.dataset.layerId = layer.id;
    if (selectedLayerIds.has(layer.id)) {
      row.classList.add("is-active");
    }

    const swatch = document.createElement("span");
    swatch.className = "layer-row__swatch";
    const swatchLabel = getLayerSwatchLabel(layer);
    if (swatchLabel) {
      swatch.textContent = swatchLabel;
      swatch.classList.add("layer-row__swatch--letter");
    }

    const meta = document.createElement("div");
    meta.className = "layer-row__meta";

    const title = document.createElement("span");
    title.className = "layer-row__title";
    title.textContent = getLayerLabel(layer);

    const type = document.createElement("span");
    type.className = "layer-row__type";
    type.textContent = layer.type;

    meta.append(title, type);

    const actions = document.createElement("div");
    actions.className = "layer-row__actions";

    const visibilityButton = document.createElement("button");
    visibilityButton.type = "button";
    visibilityButton.className = "layer-icon-btn";
    visibilityButton.dataset.action = "toggle-visibility";
    visibilityButton.dataset.layerId = layer.id;
    visibilityButton.innerHTML = `<span class="${layer.visible ? "fr-icon-eye-line" : "fr-icon-eye-off-line"}" aria-hidden="true"></span>`;
    visibilityButton.setAttribute("aria-label", layer.visible ? "Calque visible" : "Calque masque");
    if (!layer.visible) {
      visibilityButton.classList.add("is-hidden-toggle");
    }
    visibilityButton.title = layer.visible ? "Masquer" : "Afficher";
    const onVisibilityAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleLayerVisibility(layer.id);
    };
    visibilityButton.addEventListener("pointerdown", onVisibilityAction);
    visibilityButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "layer-icon-btn";
    upButton.dataset.action = "move-up";
    upButton.dataset.layerId = layer.id;
    upButton.innerHTML = '<span class="layer-order-triangle layer-order-triangle--up" aria-hidden="true"></span>';
    upButton.setAttribute("aria-label", "Monter le calque");
    upButton.title = "Monter";
    const onMoveUpAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      moveLayer(layer.id, 1);
    };
    upButton.addEventListener("pointerdown", onMoveUpAction);
    upButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "layer-icon-btn";
    downButton.dataset.action = "move-down";
    downButton.dataset.layerId = layer.id;
    downButton.innerHTML = '<span class="layer-order-triangle layer-order-triangle--down" aria-hidden="true"></span>';
    downButton.setAttribute("aria-label", "Descendre le calque");
    downButton.title = "Descendre";
    const onMoveDownAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      moveLayer(layer.id, -1);
    };
    downButton.addEventListener("pointerdown", onMoveDownAction);
    downButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const lockButton = document.createElement("button");
    lockButton.type = "button";
    lockButton.className = "layer-icon-btn";
    lockButton.dataset.action = "toggle-lock";
    lockButton.dataset.layerId = layer.id;
    lockButton.innerHTML = `<span class="${layer.locked ? "fr-icon-lock-line" : "fr-icon-lock-unlock-line"}" aria-hidden="true"></span>`;
    lockButton.setAttribute("aria-label", layer.locked ? "Calque verrouille" : "Calque deverrouille");
    if (layer.locked) {
      lockButton.classList.add("is-locked-toggle");
    }
    lockButton.title = layer.locked ? "Deverrouiller" : "Verrouiller";
    const onLockAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleLayerLock(layer.id);
    };
    lockButton.addEventListener("pointerdown", onLockAction);
    lockButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    actions.append(visibilityButton, upButton, downButton, lockButton);
    row.append(swatch, meta, actions);
    row.addEventListener("click", () => selectLayer(layer.id));
    list.appendChild(row);
  });

  layersList.appendChild(list);
  refreshLayerCount();
  renderLegend();
  return;

  const groupedLayers = {
    block1: [],
    block2: [],
    block3: [],
    block4: [],
  };

  [...layers].reverse().filter((layer) => {
    if (!isLayerListed(layer)) {
      return false;
    }
    if (layer.type === "picto") {
      return isFullyInsideMapArea(layer.id);
    }
    return true;
  }).forEach((layer) => {
    if (["title", "north", "source", "map"].includes(layer.type)) {
      groupedLayers.block1.push(layer);
      return;
    }

    if (layer.type === "text") {
      groupedLayers.block2.push(layer);
      return;
    }

    if (layer.type === "picto") {
      groupedLayers.block3.push(layer);
      return;
    }

    if (layer.type === "shape") {
      groupedLayers.block4.push(layer);
    }
  });

  const groups = [
    { key: "block1", title: "Groupe 1 : Titre, Fond de carte"  , hint: "Eléments de base" },
    { key: "block2", title: "Groupe 2 : Textes libres", hint: "Tous les textes libres et étiquettes" },
    { key: "block3", title: "Groupe 3 : Pictogrammes", hint: "Tous les pictogrammes sur la carte" },
    { key: "block4", title: "Groupe 4 : Forme", hint: "Toutes les formes dessinées sur la carte" },
  ];

  groups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "layer-group";
    if (collapsedLayerGroups.has(group.key)) {
      section.classList.add("is-collapsed");
    }

    const head = document.createElement("div");
    head.className = "layer-group__head";

    const titleWrap = document.createElement("div");
    titleWrap.className = "layer-group__title-wrap";

    const title = document.createElement("h3");
    title.className = "layer-group__title";
    title.textContent = group.title;

    const hint = document.createElement("p");
    hint.className = "layer-group__hint";
    hint.textContent = group.hint;
    titleWrap.append(title, hint);

    const toggleButton = document.createElement("button");
    toggleButton.type = "button";
    toggleButton.className = "layer-group__toggle";
    toggleButton.textContent = collapsedLayerGroups.has(group.key) ? "+" : "-";
    toggleButton.setAttribute("aria-expanded", String(!collapsedLayerGroups.has(group.key)));
    toggleButton.title = collapsedLayerGroups.has(group.key) ? "Deplier le bloc" : "Plier le bloc";
    toggleButton.addEventListener("click", (event) => {
      event.stopPropagation();
      if (collapsedLayerGroups.has(group.key)) {
        collapsedLayerGroups.delete(group.key);
      } else {
        collapsedLayerGroups.add(group.key);
      }
      renderLayers();
    });

    head.append(titleWrap, toggleButton);
    section.appendChild(head);

    const list = document.createElement("div");
    list.className = "layer-group__list";

    if (!groupedLayers[group.key].length) {
      const empty = document.createElement("p");
      empty.className = "layer-group__empty";
      empty.textContent = "Aucun élément dans ce groupe.";
      list.appendChild(empty);
    }

    groupedLayers[group.key].forEach((layer) => {
    const row = document.createElement("div");
    row.className = "layer-row";
    row.dataset.layerId = layer.id;
    if (selectedLayerIds.has(layer.id)) {
      row.classList.add("is-active");
    }

    const swatch = document.createElement("span");
    swatch.className = "layer-row__swatch";

    const meta = document.createElement("div");
    meta.className = "layer-row__meta";

    const title = document.createElement("span");
    title.className = "layer-row__title";
    title.textContent = getLayerLabel(layer);

    const type = document.createElement("span");
    type.className = "layer-row__type";
    type.textContent = layer.type;

    meta.append(title, type);

    const actions = document.createElement("div");
    actions.className = "layer-row__actions";

    const visibilityButton = document.createElement("button");
    visibilityButton.type = "button";
    visibilityButton.className = "layer-icon-btn";
    visibilityButton.dataset.action = "toggle-visibility";
    visibilityButton.dataset.layerId = layer.id;
    visibilityButton.innerHTML = `<span class="${layer.visible ? "fr-icon-eye-line" : "fr-icon-eye-off-line"}" aria-hidden="true"></span>`;
    visibilityButton.setAttribute("aria-label", layer.visible ? "Calque visible" : "Calque masque");
    if (!layer.visible) {
      visibilityButton.classList.add("is-hidden-toggle");
    }
    visibilityButton.title = layer.visible ? "Masquer" : "Afficher";
    const onVisibilityAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleLayerVisibility(layer.id);
    };
    visibilityButton.addEventListener("pointerdown", onVisibilityAction);
    visibilityButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const upButton = document.createElement("button");
    upButton.type = "button";
    upButton.className = "layer-icon-btn";
    upButton.dataset.action = "move-up";
    upButton.dataset.layerId = layer.id;
    upButton.innerHTML = '<span class="layer-order-triangle layer-order-triangle--up" aria-hidden="true"></span>';
    upButton.setAttribute("aria-label", "Monter le calque");
    upButton.title = "Monter";
    const onMoveUpAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      moveLayer(layer.id, 1);
    };
    upButton.addEventListener("pointerdown", onMoveUpAction);
    upButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const downButton = document.createElement("button");
    downButton.type = "button";
    downButton.className = "layer-icon-btn";
    downButton.dataset.action = "move-down";
    downButton.dataset.layerId = layer.id;
    downButton.innerHTML = '<span class="layer-order-triangle layer-order-triangle--down" aria-hidden="true"></span>';
    downButton.setAttribute("aria-label", "Descendre le calque");
    downButton.title = "Descendre";
    const onMoveDownAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      moveLayer(layer.id, -1);
    };
    downButton.addEventListener("pointerdown", onMoveDownAction);
    downButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    const lockButton = document.createElement("button");
    lockButton.type = "button";
    lockButton.className = "layer-icon-btn";
    lockButton.dataset.action = "toggle-lock";
    lockButton.dataset.layerId = layer.id;
    lockButton.innerHTML = `<span class="${layer.locked ? "fr-icon-lock-line" : "fr-icon-lock-unlock-line"}" aria-hidden="true"></span>`;
    lockButton.setAttribute("aria-label", layer.locked ? "Calque verrouille" : "Calque deverrouille");
    if (layer.locked) {
      lockButton.classList.add("is-locked-toggle");
    }
    lockButton.title = layer.locked ? "Deverrouiller" : "Verrouiller";
    const onLockAction = (event) => {
      event.preventDefault();
      event.stopPropagation();
      toggleLayerLock(layer.id);
    };
    lockButton.addEventListener("pointerdown", onLockAction);
    lockButton.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
    });

    actions.append(visibilityButton, upButton, downButton, lockButton);
    row.append(swatch, meta, actions);
    row.addEventListener("click", () => selectLayer(layer.id));
      list.appendChild(row);
    });

    section.appendChild(list);
    layersList.appendChild(section);
  });

  refreshLayerCount();
  renderBoardTemplateGuides();
  renderLegend();
}

function buildCopiedLayerPayload(layerId) {
  const layer = getLayer(layerId);
  const element = layer ? getElementByLayerId(layer.id) : null;
  if (!layer || !element || layer.type === "map" || isBannerLogoLayer(layer)) {
    return null;
  }

  return {
    type: layer.type,
    label: layer.label,
    src: layer.src || "",
    pictoKey: layer.pictoKey || "",
    groupKey: layer.groupKey || "",
    groupTitle: layer.groupTitle || "",
    shapeType: element.dataset.shapeType || "",
    shapeStyle: isShapeStyleLayer(layer) ? getShapeStyleState(layer.id) : null,
    textStyle: isTextStyleLayer(layer) ? getTextStyleState(layer.id) : null,
    rotation: element.dataset.rotation || "",
    html: element.innerHTML,
    left: parseFloat(element.style.left || "0"),
    top: parseFloat(element.style.top || "0"),
    width: parseFloat(element.style.width || "12"),
    height: parseFloat(element.style.height || "12"),
  };
}

function buildCopyPayloadFromCurrentSelection() {
  if (legendSelection) {
    return null;
  }

  const primaryPayload = buildCopiedLayerPayload(selectedLayerId);
  if (primaryPayload) {
    return primaryPayload;
  }

  const fallbackLayer = getSelectedLayers().find((layer) => layer && layer.type !== "map");
  if (!fallbackLayer) {
    return null;
  }
  return buildCopiedLayerPayload(fallbackLayer.id);
}

function updateClipboardButtons() {
  const hasCopyableSelection = Boolean(buildCopyPayloadFromCurrentSelection());
  if (toolbarCopyButton) {
    toolbarCopyButton.disabled = !hasCopyableSelection;
  }
  if (toolbarPasteButton) {
    toolbarPasteButton.disabled = !copiedLayerPayload;
  }
}

function updateQuickDeleteButton() {
  if (!toolbarDeleteButton) {
    return;
  }
  if (isSubtitleSelectionActive()) {
    toolbarDeleteButton.disabled = false;
    return;
  }
  if (legendSelection) {
    toolbarDeleteButton.disabled = true;
    return;
  }
  const hasDeletableSelection = getSelectedLayers().some((layer) => canDeleteLayer(layer));
  toolbarDeleteButton.disabled = !hasDeletableSelection;
}

function clearSelectedSubtitle() {
  if (!isSubtitleSelectionActive()) {
    return false;
  }

  pushHistory();
  subtitleInput.value = "";
  syncBaseTexts();
  renderLayers();
  refreshSelectedControls();
  return true;
}

function copyCurrentSelection() {
  const payload = buildCopyPayloadFromCurrentSelection();
  if (!payload) {
    return null;
  }
  copiedLayerPayload = payload;
  updateClipboardButtons();
  return payload;
}

function pasteCopiedLayer() {
  if (!copiedLayerPayload) {
    return false;
  }

  pushHistory();
  const payload = copiedLayerPayload;
  const layerId = getNextLayerId(payload.type);
  const element = document.createElement("div");
  element.className = `board-element board-element--${payload.type}`;
  element.dataset.layerId = layerId;
  element.dataset.type = payload.type;
  if (payload.shapeType) {
    element.dataset.shapeType = payload.shapeType;
  }
  element.style.left = `${clamp(payload.left + 2, 0, 90)}%`;
  element.style.top = `${clamp(payload.top + 2, 0, 90)}%`;
  element.style.width = `${payload.width}%`;
  element.style.height = `${payload.height}%`;
  element.innerHTML = payload.html;

  board.appendChild(element);
  attachElementEvents(element);
  applyTextLayout(layerId);

  layers.push({
    id: layerId,
    type: payload.type,
    label: payload.label,
    src: payload.src || undefined,
    pictoKey: payload.pictoKey || undefined,
    groupKey: payload.groupKey || undefined,
    groupTitle: payload.groupTitle || undefined,
    shapeType: payload.shapeType || undefined,
    locked: false,
    visible: true,
    listed: true,
  });

  if (payload.textStyle && ["title", "source", "text"].includes(payload.type)) {
    initializeTextStyleState(layerId, payload.textStyle);
  }

  if (payload.rotation) {
    element.dataset.rotation = String(payload.rotation);
    if (["title", "source", "text"].includes(payload.type)) {
      syncElementTextStylePresentation(layerId);
    }
  }

  if (payload.shapeStyle && payload.type === "shape") {
    initializeShapeStyleState(layerId, payload.shapeStyle);
  }

  applyLayerOrder();
  renderLayers();
  selectLayer(layerId);
  updateClipboardButtons();
  return true;
}

function toggleLayerVisibility(layerId) {
  pushHistory();
  const layer = getLayer(layerId);
  const element = getElementByLayerId(layerId);
  if (!layer || !element) {
    return;
  }

  layer.visible = !layer.visible;
  layer.listed = true;
  element.classList.toggle("is-hidden", !layer.visible);
  if (layer.type === "map") {
    element.style.visibility = layer.visible ? "visible" : "hidden";
    syncMapPlaceholderState();
  }
  renderLayers();
}

function toggleLayerLock(layerId) {
  pushHistory();
  const layer = getLayer(layerId);
  if (!layer) {
    return;
  }

  layer.locked = !layer.locked;
  setLayerLockedVisual(layerId);
  if (layer.locked) {
    selectedLayerIds.delete(layerId);
    if (selectedLayerId === layerId) {
      selectedLayerId = "";
    }
  }
  renderLayers();
  refreshSelectedControls();
}

function moveLayer(layerId, direction) {
  const index = getLayerIndex(layerId);
  if (index === -1) {
    return;
  }

  const currentLayer = layers[index];
  if (currentLayer.type === "map") {
    const mapIndices = layers
      .map((layer, layerIndex) => (layer.type === "map" ? layerIndex : -1))
      .filter((layerIndex) => layerIndex !== -1);
    const mapPosition = mapIndices.indexOf(index);
    const nextMapPosition = mapPosition + direction;
    if (mapPosition === -1 || nextMapPosition < 0 || nextMapPosition >= mapIndices.length) {
      return;
    }

    const targetIndex = mapIndices[nextMapPosition];
    pushHistory();
    [layers[index], layers[targetIndex]] = [layers[targetIndex], layers[index]];
    applyLayerOrder();
    renderLayers();
    return;
  }

  const nextIndex = index + direction;
  if (nextIndex < 0 || nextIndex >= layers.length) {
    return;
  }
  if (layers[nextIndex].type === "map") {
    return;
  }

  pushHistory();
  [layers[index], layers[nextIndex]] = [layers[nextIndex], layers[index]];
  applyLayerOrder();
  renderLayers();
}

function syncBaseTexts() {
  setBoardText(boardTitle, titleInput.value, "Titre de la carte");
  setBoardText(boardSubtitle, subtitleInput.value, "Sous-titre ou precision territoriale", { allowEmpty: true });
  setBoardText(boardSource, sourceInput.value, "Source : a completer");
  setBoardText(northLabel, northLabelInput.value, "N");
  if (!boardTitle.closest("[data-layer-id]")?.dataset.textFontSize) {
    initializeTextStyleState("title-base", getDefaultTitleStyleForCurrentFormat());
  }
  if (!boardSource.closest("[data-layer-id]")?.dataset.textFontSize) {
    initializeTextStyleState("source-base");
  }
  refreshSelectedControls();
}

function refreshLegendManagerControls(styleState = null, enabled = false, textValue = "", hint = "Selectionnez un titre de sous-bloc ou un libelle de picto dans la legende.") {
  if (!legendSelectedText) {
    return;
  }

  legendSelectionHint.textContent = hint;
  legendSelectedText.value = textValue;
  legendSelectedFontSize.value = String(styleState?.fontSize || 13);
  legendSelectedTextColor.value = styleState?.textColor || "#161616";
  legendSelectedTextBackground.value = styleState?.backgroundColor || "#ffffff";
  legendSelectedFontFamily.value = styleState?.fontFamily || "Marianne, Arial, sans-serif";

  legendSelectedText.disabled = !enabled;
  legendSelectedFontSize.disabled = !enabled;
  legendSelectedTextColor.disabled = !enabled;
  legendSelectedTextBackground.disabled = !enabled;
  legendSelectedFontFamily.disabled = !enabled;
  legendToggleBoldButton.disabled = !enabled;
  legendToggleItalicButton.disabled = !enabled;
  legendToggleTransparentBackgroundButton.disabled = !enabled;

  legendToggleBoldButton.classList.toggle("is-active", enabled && Number(styleState?.fontWeight || 400) >= 600);
  legendToggleItalicButton.classList.toggle("is-active", enabled && styleState?.fontStyle === "italic");
  legendToggleTransparentBackgroundButton.classList.toggle("is-active", enabled && Boolean(styleState?.bgTransparent));

  const selectedSectionId = legendSelection?.sectionId || "";
  const selectedSectionIndex = selectedSectionId ? legendSectionsState.findIndex((section) => section.id === selectedSectionId) : -1;
  const hasSectionSelection = selectedSectionIndex !== -1;
  legendMoveUpButton.disabled = !hasSectionSelection || selectedSectionIndex <= 0;
  legendMoveDownButton.disabled = !hasSectionSelection || selectedSectionIndex >= legendSectionsState.length - 1;
  legendRenameSectionButton.disabled = !hasSectionSelection;
}

function refreshSelectedControls() {
  updateClipboardButtons();
  updateQuickDeleteButton();

  if (legendSelection) {
    const styleState = getLegendSelectionStyleState();
    const isSectionBody = legendSelection.kind === "section-body";
    const isEditableText = legendSelection.kind !== "section-body";
    const section = legendSectionsState.find((item) => item.id === legendSelection.sectionId);

    if (!section || !styleState) {
      legendSelection = null;
      refreshSelectedControls();
      return;
    }

    if (legendSelection.kind === "section-title") {
      selectionHint.textContent = `Legende : sous-bloc "${section.title}" selectionne.`;
      selectedText.value = "";
      refreshLegendManagerControls(styleState, true, section.title, `Legende : sous-bloc "${section.title}" selectionne.`);
    } else if (legendSelection.kind === "item-label") {
      const selectedItem = section.items.find((item) => item.key === legendSelection.itemKey);
      selectionHint.textContent = `Legende : element "${selectedItem?.label || ""}" selectionne.`;
      selectedText.value = "";
      refreshLegendManagerControls(styleState, true, selectedItem?.label || "", `Legende : element "${selectedItem?.label || ""}" selectionne.`);
    } else {
      selectionHint.textContent = `Legende : fond du sous-bloc "${section.title}" selectionne.`;
      selectedText.value = "";
      refreshLegendManagerControls(styleState, false, "", `Legende : fond du sous-bloc "${section.title}" selectionne. Le texte n'est pas editable pour ce mode.`);
    }

    selectedFontSize.value = String(styleState.fontSize || 13);
    selectedTextColor.value = styleState.textColor || "#161616";
    selectedTextBackground.value = styleState.backgroundColor || "#ffffff";
    selectedTextBorderColor.value = styleState.borderColor || "#000091";
    selectedPictoSize.value = formatNumberControlValue(PICTO_DEFAULT_SIZE_PERCENT);
    selectedFontFamily.value = styleState.fontFamily || "Marianne, Arial, sans-serif";
    legendColumns.value = String(clamp(Number(section.columns) || 1, 1, 6));
    legendSymbolSize.value = String(clamp(Number(section.symbolSize) || 20, 10, 44));
    selectedRotation.value = "0";
    selectedRotation.disabled = true;
    selectedWidth.disabled = true;
    selectedHeight.disabled = true;
    selectedPictoSize.disabled = true;
    bringForwardButton.disabled = true;
    sendBackwardButton.disabled = true;
    deleteLayerButton.disabled = true;
    selectedText.disabled = true;
    selectedFontSize.disabled = true;
    selectedTextColor.disabled = true;
    selectedTextBackground.disabled = true;
    selectedTextBorderColor.disabled = true;
    toggleTransparentBackgroundButton.disabled = true;
    toggleTransparentBorderButton.disabled = true;
    toggleTransparentBorderButton.classList.remove("is-active");
    selectedFontFamily.disabled = true;
    legendColumns.disabled = false;
    legendSymbolSize.disabled = false;
    updateTextStyleButtons(styleState, true);
    return;
  }

  const layer = getLayer(selectedLayerId);
  const element = layer ? getElementByLayerId(layer.id) : null;
  const selectedLayers = getSelectedLayers();
  const isMultiSelection = selectedLayers.length > 1;
  const resizeTargetLayers = getResizeTargetLayers();
  const pictoSizeTargetLayers = getPictoSizeTargetLayers();
  const hasOnlyPictoResizeTargets = resizeTargetLayers.length > 0
    && resizeTargetLayers.every((selectedLayer) => selectedLayer.type === "picto");
  const textStyleTargetLayers = getTextStyleTargetLayers();
  const rotationTargetLayers = getRotationTargetLayers();
  const isEditable = Boolean(layer && element);
  const isLocked = Boolean(layer && layer.locked);
  const isDeletable = canDeleteLayer(layer);
  const isTextStyleEditable = isMultiSelection
    ? textStyleTargetLayers.length > 0
    : isEditable && !isLocked && isTextStyleLayer(layer);
  const isShapeStyleEditable = !isMultiSelection && isEditable && !isLocked && isShapeStyleLayer(layer);
  const isRotationEditable = isMultiSelection
    ? rotationTargetLayers.length > 0
    : isEditable && !isLocked && isRotatableLayer(layer);

  if (!layer || !element) {
    selectionHint.textContent = "Selectionnez un element sur la planche pour ajuster son texte ou sa taille.";
    selectedText.value = "";
    selectedFontSize.value = "28";
    selectedTextColor.value = "#000000";
    selectedTextBackground.value = "#ffffff";
    selectedTextBorderColor.value = "#000091";
    selectedPictoSize.value = formatNumberControlValue(PICTO_DEFAULT_SIZE_PERCENT);
    selectedFontFamily.value = "Marianne, Arial, sans-serif";
    selectedFontSize.disabled = true;
    selectedTextColor.disabled = true;
    selectedTextBackground.disabled = true;
    selectedTextBorderColor.disabled = true;
    selectedPictoSize.disabled = true;
    toggleTransparentBorderButton.disabled = true;
    selectedFontFamily.disabled = true;
    selectedRotation.value = "0";
    selectedRotation.disabled = true;
    legendColumns.value = "1";
    legendSymbolSize.value = "20";
    legendColumns.disabled = true;
    legendSymbolSize.disabled = true;
    selectedWidth.disabled = true;
    selectedHeight.disabled = true;
    bringForwardButton.disabled = true;
    sendBackwardButton.disabled = true;
    deleteLayerButton.disabled = true;
    updateTextStyleButtons(null, true);
    refreshLegendManagerControls(null, false, "");
    return;
  }

  if (isMultiSelection) {
    selectionHint.textContent = `${selectedLayers.length} elements selectionnes sur la planche.`;
  } else {
    const subtitleSelection = layer.id === "title-base" && isSubtitleSelectionActive();
    if (subtitleSelection) {
      selectionHint.textContent = isLocked
        ? "Element selectionne : Sous-titre (verrouille)."
        : "Element selectionne : Sous-titre.";
    } else {
      selectionHint.textContent = isLocked
        ? `Element selectionne : ${getLayerLabel(layer)} (verrouille).`
        : `Element selectionne : ${getLayerLabel(layer)}.`;
    }
  }

  if (isMultiSelection && resizeTargetLayers.length) {
    const firstResizeElement = getElementByLayerId(resizeTargetLayers[0].id);
    selectedWidth.value = Math.round(parseFloat(firstResizeElement?.style.width || "12"));
    selectedHeight.value = Math.round(parseFloat(firstResizeElement?.style.height || "12"));
  } else {
    selectedWidth.value = Math.round(parseFloat(element.style.width || "12"));
    selectedHeight.value = Math.round(parseFloat(element.style.height || "12"));
  }

  if (pictoSizeTargetLayers.length) {
    const firstPictoElement = getElementByLayerId(pictoSizeTargetLayers[0].id);
    selectedPictoSize.value = formatNumberControlValue(parseFloat(firstPictoElement?.style.width || String(PICTO_DEFAULT_SIZE_PERCENT)));
  } else {
    selectedPictoSize.value = formatNumberControlValue(PICTO_DEFAULT_SIZE_PERCENT);
  }

  if (isMultiSelection) {
    selectedText.value = "";
  } else if (layer.id === "title-base") {
    selectedText.value = isSubtitleSelectionActive() ? subtitleInput.value : titleInput.value;
  } else if (layer.id === "source-base") {
    selectedText.value = sourceInput.value;
  } else if (layer.type === "north") {
    selectedText.value = northLabelInput.value;
  } else if (layer.type === "map") {
    selectedText.value = getLayerLabel(layer);
  } else if (layer.type === "title") {
    selectedText.value = element.querySelector("h2")?.textContent || layer.label || "";
  } else if (layer.type === "source") {
    selectedText.value = getSourceTextNode(element)?.textContent || layer.label || "";
  } else {
    selectedText.value = layer.label || "";
  }

  const subtitleSelection = !isMultiSelection && layer.id === "title-base" && isSubtitleSelectionActive();
  const styleState = subtitleSelection
    ? getSubtitleStyleState()
    : (isMultiSelection && textStyleTargetLayers.length
      ? getTextStyleState(textStyleTargetLayers[0].id)
      : getTextStyleState(layer.id));
  const shapeStyleState = !isMultiSelection ? getShapeStyleState(layer.id) : null;
  selectedFontSize.value = String(styleState?.fontSize || 28);
  selectedTextColor.value = styleState?.textColor || "#000000";
  selectedTextBackground.value = shapeStyleState
    ? toHexColor(shapeStyleState.fillColor)
    : styleState?.backgroundColor || "#ffffff";
  selectedTextBorderColor.value = styleState?.borderColor || "#000091";
  selectedFontFamily.value = styleState?.fontFamily || "Marianne, Arial, sans-serif";
  if (isMultiSelection && rotationTargetLayers.length) {
    const firstRotationElement = getElementByLayerId(rotationTargetLayers[0].id);
    selectedRotation.value = firstRotationElement?.dataset.rotation || "0";
  } else {
    selectedRotation.value = element.dataset.rotation || (layer.type === "source" ? "180" : "0");
  }

  selectedText.disabled = isMultiSelection || !isEditable || isLocked || layer.type === "map" || layer.type === "picto";
  selectedFontSize.disabled = !isTextStyleEditable;
  selectedTextColor.disabled = !isTextStyleEditable;
  selectedTextBackground.disabled = subtitleSelection || !(isTextStyleEditable || isShapeStyleEditable);
  selectedTextBorderColor.disabled = subtitleSelection || !isTextStyleEditable;
  selectedPictoSize.disabled = !pictoSizeTargetLayers.length;
  toggleTransparentBorderButton.disabled = subtitleSelection || !isTextStyleEditable;
  selectedFontFamily.disabled = !isTextStyleEditable;
  selectedRotation.disabled = subtitleSelection || !isRotationEditable;
  legendColumns.value = "1";
  legendSymbolSize.value = "20";
  legendColumns.disabled = true;
  legendSymbolSize.disabled = true;
  if (isShapeStyleEditable) {
    updateTextStyleButtons({ bgTransparent: shapeStyleState?.fillTransparent }, false);
    toggleBoldButton.disabled = true;
    toggleItalicButton.disabled = true;
    selectedTextBorderColor.disabled = true;
    selectedPictoSize.disabled = true;
    toggleTransparentBorderButton.disabled = true;
  } else {
    updateTextStyleButtons(styleState, !isTextStyleEditable);
  }
  if (subtitleSelection) {
    selectedWidth.disabled = true;
    selectedHeight.disabled = true;
    toggleTransparentBackgroundButton.disabled = true;
    toggleTransparentBorderButton.disabled = true;
  }
  selectedWidth.disabled = subtitleSelection || !resizeTargetLayers.length || hasOnlyPictoResizeTargets;
  selectedHeight.disabled = subtitleSelection || !resizeTargetLayers.length || hasOnlyPictoResizeTargets;
  bringForwardButton.disabled = isMultiSelection || !isEditable || isLocked;
  sendBackwardButton.disabled = isMultiSelection || !isEditable || isLocked;
  deleteLayerButton.disabled = subtitleSelection
    ? false
    : (isMultiSelection ? !selectedLayers.some((selected) => canDeleteLayer(selected)) : !isDeletable);
  refreshLegendManagerControls(null, false, "");
}

function updateLegendLayoutStyle(nextLayout) {
  if (!legendSelection) {
    return;
  }

  const section = legendSectionsState.find((item) => item.id === legendSelection.sectionId);
  if (!section) {
    return;
  }
  pushHistory();

  if (typeof nextLayout.columns !== "undefined") {
    section.columns = clamp(Number(nextLayout.columns) || 1, 1, 6);
  }

  if (typeof nextLayout.symbolSize !== "undefined") {
    section.symbolSize = clamp(Number(nextLayout.symbolSize) || 20, 10, 44);
  }

  renderLegend();
  refreshSelectedControls();
}

function getPictoMarkup(src, label) {
  return `<img src="${src}" alt="${label}" crossorigin="anonymous">`;
}

function createReportHeaderLogoElement(layerId, config) {
  const element = document.createElement("div");
  element.className = "board-element board-element--picto board-element--banner-logo is-hidden";
  element.dataset.layerId = layerId;
  element.dataset.type = "picto";
  element.dataset.bannerLogo = config.side || "";
  element.style.left = "0%";
  element.style.top = "0%";
  element.style.width = "0%";
  element.style.height = "0%";
  element.innerHTML = `<span class="board-picto-badge">${getPictoMarkup(config.src, config.label)}</span>`;
  board.appendChild(element);
  return element;
}

function ensureReportHeaderLogoBaseLayers() {
  let hasAddedMissingLayer = false;

  Object.entries(REPORT_HEADER_LOGO_CONFIG).forEach(([layerId, config]) => {
    let layer = getLayer(layerId);
    if (!layer) {
      layers.push({
        id: layerId,
        type: "picto",
        label: config.label,
        src: config.src,
        locked: false,
        visible: false,
        listed: false,
        isBannerLogo: true,
        excludeFromLegend: true,
      });
      hasAddedMissingLayer = true;
      layer = getLayer(layerId);
    } else {
      layer.label = config.label;
      layer.src = config.src;
      layer.listed = false;
      layer.isBannerLogo = true;
      layer.excludeFromLegend = true;
    }

    let element = getElementByLayerId(layerId);
    if (!element) {
      element = createReportHeaderLogoElement(layerId, config);
      attachElementEvents(element);
      hasAddedMissingLayer = true;
    } else {
      element.classList.add("board-element--banner-logo");
      element.dataset.bannerLogo = config.side || "";
      element.dataset.type = "picto";
      if (!element.querySelector(".board-picto-badge")) {
        element.innerHTML = `<span class="board-picto-badge">${getPictoMarkup(config.src, config.label)}</span>`;
      }
    }
  });

  return hasAddedMissingLayer;
}

function syncReportHeaderLogoLayers(options = {}) {
  const { forceDefaultFrame = false } = options;
  const showLogos = isPdfExportFormat();

  Object.keys(REPORT_HEADER_LOGO_CONFIG).forEach((layerId) => {
    const layer = getLayer(layerId);
    const element = getElementByLayerId(layerId);
    if (!layer || !element) {
      return;
    }

    layer.visible = showLogos;
    layer.listed = false;
    layer.locked = false;
    layer.isBannerLogo = true;
    layer.excludeFromLegend = true;
    element.classList.toggle("is-hidden", !showLogos);

    if (!showLogos) {
      return;
    }

    const shouldApplyDefaultFrame = forceDefaultFrame
      || !element.style.width
      || !element.style.height
      || element.style.width === "0%"
      || element.style.height === "0%";

    if (shouldApplyDefaultFrame) {
      applyFrameToLayer(layerId, getReportHeaderLogoFrame(layerId));
    }

    clampElementToLayerWorkArea(element, layer);
  });
}

function normalizeSearchText(value = "") {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim();
}

function getPictoGroupByKey(groupKey) {
  return PICTO_GROUPS.find((group) => group.key === groupKey) || null;
}

function normalizePictoGroupKey(groupLabel = "") {
  const normalized = normalizeSearchText(groupLabel);
  if (!normalized) {
    return "";
  }
  if (normalized.includes("bilan")) {
    return "bilans";
  }
  if (normalized.includes("renfort") || normalized.includes("fsi")) {
    return "renfort-fsi";
  }
  if (
    normalized.includes("trouble")
    || normalized.includes("incident")
    || normalized.includes("blocage")
    || normalized.includes("filtrage")
  ) {
    return "troubles";
  }
  if (normalized.includes("autre")) {
    return "autres";
  }
  return "";
}

function inferPictoGroupKey(config, pictoKey = "") {
  const explicitGroupKey = normalizePictoGroupKey(config?.group || config?.category || "");
  if (explicitGroupKey) {
    return explicitGroupKey;
  }

  const haystack = normalizeSearchText(`${pictoKey} ${config?.label || ""}`);
  if (/interpellation|participation|victime|victimes|bilan/.test(haystack)) {
    return "bilans";
  }
  if (/crs|egm|umz|centaure|renfort|fsi/.test(haystack)) {
    return "renfort-fsi";
  }
  if (/degradation|tension|groupuscule|logistique|lycee|lycee|routier|route|blocage|filtrage|trouble|incident/.test(haystack)) {
    return "troubles";
  }
  return "autres";
}

function getPictoGroupDescriptor(config, pictoKey = "") {
  const explicitGroup = String(config?.group || config?.category || "").trim();
  const knownGroupKey = inferPictoGroupKey(config, pictoKey);
  const knownGroup = getPictoGroupByKey(knownGroupKey);
  if (knownGroup) {
    return knownGroup;
  }

  if (explicitGroup) {
    const customKey = `custom-${normalizeSearchText(explicitGroup).replace(/[^a-z0-9]+/g, "-")}`;
    return { key: customKey, title: explicitGroup };
  }

  return getPictoGroupByKey("autres") || { key: "autres", title: "Autres pictos" };
}

function applyPictoSearchFilter() {
  const query = normalizeSearchText(pictoSearch?.value || "");
  const containers = [pictoLibrary, favoritePictos].filter(Boolean);

  containers.forEach((container) => {
    const buttons = [...container.querySelectorAll(".carto-picto")];
    buttons.forEach((button) => {
      const labelNode = button.querySelector(".carto-picto__label");
      const haystack = normalizeSearchText(`${button.dataset.picto || ""} ${labelNode?.textContent || ""}`);
      const isMatch = !query || haystack.includes(query);
      button.classList.toggle("is-filtered-out", !isMatch);
    });

    const groupSections = [...container.querySelectorAll(".carto-picto-group")];
    groupSections.forEach((section) => {
      const hasVisibleButtons = [...section.querySelectorAll(".carto-picto")].some((button) => !button.classList.contains("is-filtered-out"));
      section.hidden = !hasVisibleButtons;
    });
  });
}

function buildPictoButton(config, pictoKey) {
  const button = document.createElement("button");
  button.className = "carto-picto";
  button.type = "button";
  button.dataset.picto = pictoKey;
  button.innerHTML = `
    <span class="carto-picto__icon">${getPictoMarkup(config.src, config.label)}</span>
    <span class="carto-picto__label">${config.label}</span>
  `;
  button.addEventListener("click", () => {
    createPictoElement(pictoKey);
  });
  return button;
}

function buildPictoGroupSection(group, entries = []) {
  const section = document.createElement("section");
  section.className = "carto-picto-group";
  section.dataset.groupKey = group.key;

  const title = document.createElement("h3");
  title.className = "carto-picto-group__title";
  title.textContent = group.title;

  const grid = document.createElement("div");
  grid.className = "carto-picto-grid carto-picto-group__grid";

  entries.forEach(([pictoKey, config]) => {
    grid.appendChild(buildPictoButton(config, pictoKey));
  });

  section.append(title, grid);
  return section;
}

function renderFavoritePictos() {
  favoritePictos.innerHTML = "";
  favoritePictoKeys.forEach((pictoKey) => {
    const config = pictoCatalog[pictoKey];
    if (config) {
      favoritePictos.appendChild(buildPictoButton(config, pictoKey));
    }
  });
  applyPictoSearchFilter();
}

function renderPictoLibrary() {
  pictoLibrary.innerHTML = "";

  const groupedEntries = new Map();
  const groupDescriptors = new Map();
  PICTO_GROUPS.forEach((group) => {
    groupedEntries.set(group.key, []);
    groupDescriptors.set(group.key, group);
  });

  Object.entries(pictoCatalog).forEach(([pictoKey, config]) => {
    const group = getPictoGroupDescriptor(config, pictoKey);
    if (!groupedEntries.has(group.key)) {
      groupedEntries.set(group.key, []);
    }
    groupDescriptors.set(group.key, group);
    groupedEntries.get(group.key).push([pictoKey, config]);
  });

  groupedEntries.forEach((entries) => {
    entries.sort((firstEntry, secondEntry) => (
      String(firstEntry[1]?.label || "").localeCompare(String(secondEntry[1]?.label || ""), "fr", { sensitivity: "base" })
    ));
  });

  PICTO_GROUPS.forEach((group) => {
    const entries = groupedEntries.get(group.key) || [];
    if (!entries.length) {
      return;
    }
    pictoLibrary.appendChild(buildPictoGroupSection(group, entries));
  });

  groupedEntries.forEach((entries, groupKey) => {
    if (!entries.length || getPictoGroupByKey(groupKey)) {
      return;
    }
    pictoLibrary.appendChild(buildPictoGroupSection(groupDescriptors.get(groupKey) || { key: groupKey, title: groupKey }, entries));
  });

  applyPictoSearchFilter();
}

function toAbsoluteUrl(path) {
  try {
    return new URL(path, window.location.href).href;
  } catch (error) {
    return path;
  }
}

function isSupportedImagePath(path = "") {
  return /\.(svg|png|jpe?g|webp)(?:[?#].*)?$/i.test(String(path || ""));
}

function normalizeReadyMapPath(path = "") {
  const raw = String(path || "").trim();
  if (!raw) {
    return "";
  }
  if (/^(data:|blob:|https?:)/i.test(raw) || raw.startsWith("/")) {
    return raw;
  }
  if (/^\.?\/?carte_source\//i.test(raw)) {
    return `./${raw.replace(/^\.?\//, "")}`;
  }
  return `./carte_source/${raw.replace(/^\.?\//, "")}`;
}

function getReadyMapLabelFromPath(path = "") {
  const cleaned = String(path || "").split("#")[0].split("?")[0];
  const fileName = decodeURIComponent(cleaned.split("/").pop() || "").trim();
  const label = getLayerDisplayNameFromFile(fileName).replace(/[_-]+/g, " ");
  return label || "Carte prete";
}

function addReadyMapEntry(src, label = "") {
  const resolved = normalizeReadyMapPath(src);
  if (!resolved || !isSupportedImagePath(resolved)) {
    return false;
  }

  const absoluteSrc = toAbsoluteUrl(resolved);
  const dedupeKey = absoluteSrc.toLowerCase();
  if (readyMapCatalog.some((item) => item.src.toLowerCase() === dedupeKey)) {
    return false;
  }

  readyMapCatalog.push({
    id: `ready-map-${readyMapCatalog.length + 1}`,
    src: absoluteSrc,
    label: String(label || "").trim() || getReadyMapLabelFromPath(resolved),
  });
  return true;
}

function canReuseBaseMapLayer() {
  const mapBaseLayer = getLayer("map-base");
  return Boolean(
    mapBaseLayer &&
    (!getMapLayerSource(mapBaseLayer) || !mapBaseLayer.listed)
  );
}

async function addMapToBoard(mapSrc, mapLabel) {
  const safeSrc = String(mapSrc || "").trim();
  if (!safeSrc) {
    return false;
  }

  await waitForImageLoad(new Image(), safeSrc);

  pushHistory();
  const mapBaseLayer = getLayer("map-base");
  let importedLayerId = "";

  if (canReuseBaseMapLayer() && mapBaseLayer) {
    setMapLayerSource("map-base", safeSrc);
    mapBaseLayer.label = mapLabel || getReadyMapLabelFromPath(safeSrc);
    mapBaseLayer.visible = true;
    mapBaseLayer.listed = true;
    mapLayer.classList.remove("is-hidden");
    mapLayer.style.visibility = "visible";
    resetMapLayerFrame();
    importedLayerId = "map-base";
  } else {
    importedLayerId = createAdditionalMapLayer(
      safeSrc,
      mapLabel || getReadyMapLabelFromPath(safeSrc),
    );
    resetMapLayerFrame();
  }

  syncMapPlaceholderState();
  applyLayerOrder();
  renderLayers();
  selectLayer(importedLayerId);
  markDocumentModified();
  return true;
}

function buildReadyMapButton(entry) {
  const button = document.createElement("button");
  button.className = "carto-map-source";
  button.type = "button";
  button.dataset.mapSrc = entry.src;
  button.dataset.mapLabel = entry.label;

  const thumb = document.createElement("span");
  thumb.className = "carto-map-source__thumb";
  const image = document.createElement("img");
  image.src = entry.src;
  image.alt = entry.label;
  image.loading = "lazy";
  image.decoding = "async";
  thumb.appendChild(image);

  const label = document.createElement("span");
  label.className = "carto-map-source__label";
  label.textContent = entry.label;

  button.appendChild(thumb);
  button.appendChild(label);

  button.addEventListener("click", async () => {
    try {
      await addMapToBoard(entry.src, entry.label);
      updateStatusMessage(`Carte prete chargee : ${entry.label}`);
    } catch (error) {
      updateStatusMessage("La carte prete n'a pas pu etre chargee.", true);
    }
  });

  return button;
}

function renderReadyMapLibrary() {
  if (!mapSourceLibrary) {
    return;
  }

  mapSourceLibrary.innerHTML = "";
  const sortedEntries = [...readyMapCatalog].sort((a, b) => (
    String(a.label || "").localeCompare(String(b.label || ""), "fr", { sensitivity: "base" })
  ));
  sortedEntries.forEach((entry) => {
    mapSourceLibrary.appendChild(buildReadyMapButton(entry));
  });

  if (mapSourceLibraryHint) {
    mapSourceLibraryHint.hidden = readyMapCatalog.length > 0;
  }
}

async function loadReadyMapsFromManifest() {
  try {
    const response = await fetch("./carte_source/manifest.json", { cache: "no-store" });
    if (!response.ok) {
      return 0;
    }
    const items = await response.json();
    if (!Array.isArray(items)) {
      return 0;
    }

    let added = 0;
    items.forEach((entry) => {
      if (!entry) {
        return;
      }

      const src = typeof entry === "string" ? entry : entry.src;
      const label = typeof entry === "string" ? "" : (entry.label || "");
      if (addReadyMapEntry(src, label)) {
        added += 1;
      }
    });
    return added;
  } catch (error) {
    return 0;
  }
}

async function loadReadyMapsFromDirectoryListing() {
  try {
    const response = await fetch("./carte_source/", { cache: "no-store" });
    if (!response.ok) {
      return 0;
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = [...doc.querySelectorAll("a[href]")].map((node) => node.getAttribute("href") || "");
    const imageLinks = links.filter((href) => isSupportedImagePath(href));
    if (!imageLinks.length) {
      return 0;
    }

    let added = 0;
    imageLinks.forEach((href) => {
      const normalized = href.startsWith("http") ? href : `./carte_source/${href.replace(/^\.?\//, "")}`;
      const label = getReadyMapLabelFromPath(normalized);
      if (addReadyMapEntry(normalized, label)) {
        added += 1;
      }
    });
    return added;
  } catch (error) {
    return 0;
  }
}

async function loadLocalMapSources() {
  readyMapCatalog.length = 0;
  await loadReadyMapsFromManifest();
  await loadReadyMapsFromDirectoryListing();
}

async function loadPictosFromManifest() {
  try {
    const response = await fetch("./pictos/manifest.json", { cache: "no-store" });
    if (!response.ok) {
      return 0;
    }

    const items = await response.json();
    if (!Array.isArray(items)) {
      return 0;
    }

    let added = 0;
    items.forEach((entry, index) => {
      if (!entry) {
        return;
      }
      const src = typeof entry === "string" ? entry : entry.src;
      const label = typeof entry === "string"
        ? entry.split("/").pop().replace(/\.[^.]+$/, "")
        : (entry.label || entry.src || "").split("/").pop().replace(/\.[^.]+$/, "");
      const group = typeof entry === "string" ? "" : (entry.group || entry.category || "");
      if (!src) {
        return;
      }
      const key = `local-manifest-${index}-${label}`.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
      pictoCatalog[key] = {
        label: label || `Picto ${index + 1}`,
        src: toAbsoluteUrl(src),
        group,
      };
      added += 1;
    });
    return added;
  } catch (error) {
    return 0;
  }
}

async function loadPictosFromDirectoryListing() {
  try {
    const response = await fetch("./pictos/", { cache: "no-store" });
    if (!response.ok) {
      return 0;
    }

    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    const links = [...doc.querySelectorAll("a[href]")].map((node) => node.getAttribute("href") || "");
    const imageLinks = links.filter((href) => /\.(svg|png|jpe?g|webp)$/i.test(href));
    if (!imageLinks.length) {
      return 0;
    }

    let added = 0;
    imageLinks.forEach((href, index) => {
      const normalized = href.startsWith("http") ? href : `./pictos/${href.replace(/^\.?\//, "")}`;
      const label = normalized.split("/").pop().replace(/\.[^.]+$/, "");
      const key = `local-dir-${index}-${label}`.toLowerCase().replace(/[^a-z0-9-]+/g, "-");
      pictoCatalog[key] = {
        label: label || `Picto ${index + 1}`,
        src: toAbsoluteUrl(normalized),
        group: "",
      };
      added += 1;
    });
    return added;
  } catch (error) {
    return 0;
  }
}

async function loadLocalPictos() {
  const fromManifest = await loadPictosFromManifest();
  if (fromManifest > 0) {
    return;
  }
  await loadPictosFromDirectoryListing();
}

function beginElementInteraction(element, event) {
  if (!element) {
    return false;
  }
  if (event.pointerType === "mouse" && event.button !== 0) {
    return false;
  }
  if (element.classList.contains("is-locked")) {
    return false;
  }

  const layerId = element.dataset.layerId;
  const layer = getLayer(layerId);
  if (!layer || layer.locked) {
    event.stopPropagation();
    return false;
  }

  const pointerTarget = event.target instanceof Element ? event.target : element;
  const titleTextTarget = layerId === "title-base" && pointerTarget?.closest("#boardSubtitle, .board-title-banner__text p")
    ? "subtitle"
    : "title";
  const resizeHandle = pointerTarget?.closest(".resize-handle");
  const resizeDirection = resizeHandle && element.contains(resizeHandle)
    ? resizeHandle.dataset.resize || "bottom-right"
    : "";
  const shouldAddToSelection = event.ctrlKey || event.metaKey || event.shiftKey;
  const wasAlreadySelected = selectedLayerIds.has(layerId);
  const hadMultipleSelection = selectedLayerIds.size > 1;

  if (shouldAddToSelection && !resizeDirection) {
    suppressSelectionClickForLayerId = layerId;
    selectLayer(layerId, { additive: true, titleTextTarget });
    event.preventDefault();
    event.stopPropagation();
    return true;
  }

  if (layer.type === "map" && !resizeDirection && !event.altKey) {
    return false;
  }

  if (!(wasAlreadySelected && hadMultipleSelection)) {
    suppressSelectionClickForLayerId = layerId;
    selectLayer(layerId, { titleTextTarget });
  } else {
    board.querySelectorAll("[data-layer-id]").forEach((boardElement) => {
      boardElement.classList.toggle("is-selected", selectedLayerIds.has(boardElement.dataset.layerId));
    });
    renderLayers();
    refreshSelectedControls();
  }

  const boardRect = board.getBoundingClientRect();
  const rect = element.getBoundingClientRect();

  clearPanInteractionState();
  clearLegendResizeState();
  event.preventDefault();
  event.stopPropagation();

  interaction = {
    mode: resizeDirection ? "resize" : "move",
    resizeDirection,
    layerId,
    layerType: layer.type,
    startX: event.clientX,
    startY: event.clientY,
    startLeft: parseFloat(element.style.left || "0"),
    startTop: parseFloat(element.style.top || "0"),
    startWidth: parseFloat(element.style.width || "12"),
    startHeight: parseFloat(element.style.height || "12"),
    offsetX: event.clientX - rect.left,
    offsetY: event.clientY - rect.top,
    boardWidth: boardRect.width,
    boardHeight: boardRect.height,
    historyCaptured: false,
    didMutate: false,
    wasInMap: layer.type === "picto" ? isFullyInsideMapArea(layerId) : null,
    selectedLayerIds: !resizeDirection && wasAlreadySelected
      ? [...selectedLayerIds].filter((selectedId) => {
        const selectedLayer = getLayer(selectedId);
        return Boolean(selectedLayer && !selectedLayer.locked);
      })
      : [layerId],
    initialPositions: !resizeDirection && wasAlreadySelected
      ? [...selectedLayerIds].map((selectedId) => {
        const selectedElement = getElementByLayerId(selectedId);
        const selectedLayer = getLayer(selectedId);
        if (selectedLayer?.locked) {
          return null;
        }
        return selectedElement ? {
          layerId: selectedId,
          left: parseFloat(selectedElement.style.left || "0"),
          top: parseFloat(selectedElement.style.top || "0"),
        } : null;
      }).filter(Boolean)
      : [{ layerId, left: parseFloat(element.style.left || "0"), top: parseFloat(element.style.top || "0") }],
  };

  if (element.setPointerCapture) {
    try {
      element.setPointerCapture(event.pointerId);
    } catch (error) {
      // Some devices/browsers may reject pointer capture; keep interaction active without it.
    }
  }

  return true;
}

function getTouchPoint(event) {
  return event.touches?.[0] || event.changedTouches?.[0] || null;
}

function createTouchInteractionEvent(event) {
  const point = getTouchPoint(event);
  if (!point) {
    return null;
  }

  return {
    pointerType: "touch",
    button: 0,
    buttons: event.touches?.length ? 1 : 0,
    pointerId: point.identifier,
    target: event.target,
    clientX: point.clientX,
    clientY: point.clientY,
    ctrlKey: event.ctrlKey,
    metaKey: event.metaKey,
    shiftKey: event.shiftKey,
    altKey: event.altKey,
    preventDefault: () => event.preventDefault(),
    stopPropagation: () => event.stopPropagation(),
  };
}

function attachElementEvents(element) {
  createResizeHandle(element);

  element.addEventListener("pointerdown", (event) => {
    beginElementInteraction(element, event);
  });

  element.addEventListener("mousedown", (event) => {
    if (!interaction) {
      beginElementInteraction(element, event);
    }
  });

  element.addEventListener("touchstart", (event) => {
    if (interaction) {
      return;
    }
    const touchEvent = createTouchInteractionEvent(event);
    if (touchEvent) {
      beginElementInteraction(element, touchEvent);
    }
  }, { passive: false });

  element.addEventListener("click", (event) => {
    if (suppressSelectionClickForLayerId === element.dataset.layerId) {
      suppressSelectionClickForLayerId = "";
      return;
    }
    selectLayer(element.dataset.layerId, { additive: event.ctrlKey || event.metaKey || event.shiftKey });
  });
}

function createPictoElement(pictoKey) {
  const config = pictoCatalog[pictoKey];
  if (!config) {
    return;
  }
  const groupDescriptor = getPictoGroupDescriptor(config, pictoKey);

  pushHistory();
  customIndex += 1;
  const layerId = `picto-${customIndex}`;
  const element = document.createElement("div");
  element.className = "board-element board-element--picto";
  element.dataset.layerId = layerId;
  element.dataset.type = "picto";
  element.style.left = `${20 + customIndex * 2}%`;
  element.style.top = `${22 + customIndex * 2}%`;
  element.style.width = `${PICTO_DEFAULT_SIZE_PERCENT}%`;
  element.style.height = `${PICTO_DEFAULT_SIZE_PERCENT}%`;
  element.innerHTML = `
    <span class="board-picto-badge">${getPictoMarkup(config.src, config.label)}</span>
  `;

  board.appendChild(element);
  attachElementEvents(element);
  applyTextLayout(layerId);

  layers.push({
    id: layerId,
    type: "picto",
    label: config.label,
    src: config.src,
    pictoKey,
    groupKey: groupDescriptor.key,
    groupTitle: groupDescriptor.title,
    locked: false,
    visible: true,
    listed: true,
  });

  applyLayerOrder();
  renderLayers();
  selectLayer(layerId);
}

function createTextElement() {
  pushHistory();
  customIndex += 1;
  const layerId = `text-${customIndex}`;
  const element = document.createElement("div");
  element.className = "board-element board-element--text";
  element.dataset.layerId = layerId;
  element.dataset.type = "text";
  element.style.left = `${18 + customIndex * 2}%`;
  element.style.top = `${18 + customIndex * 2}%`;
  element.style.width = "22%";
  element.style.height = "8%";
  element.innerHTML = "<p>Texte libre</p>";

  board.appendChild(element);
  attachElementEvents(element);

  layers.push({
    id: layerId,
    type: "text",
    label: "Texte libre",
    locked: false,
    visible: true,
    listed: true,
  });

  initializeTextStyleState(layerId);
  autoSizeTextElement(layerId);
  applyLayerOrder();
  renderLayers();
  selectLayer(layerId);
}

function createShapeElement(shapeType) {
  const shapeConfig = shapeCatalog[shapeType];
  if (!shapeConfig) {
    return;
  }

  pushHistory();
  customIndex += 1;
  const layerId = `shape-${customIndex}`;
  const element = document.createElement("div");
  element.className = "board-element board-element--shape";
  element.dataset.layerId = layerId;
  element.dataset.type = "shape";
  element.dataset.shapeType = shapeType;
  element.style.left = `${22 + customIndex * 1.2}%`;
  element.style.top = `${22 + customIndex * 1.2}%`;
  element.style.width = ["line", "black-bar"].includes(shapeType) ? "22%" : "10%";
  element.style.height = ["line", "black-bar"].includes(shapeType) ? "2.4%" : "10%";
  element.innerHTML = `<span class="board-shape board-shape--${shapeType}" aria-hidden="true"></span>`;

  board.appendChild(element);
  attachElementEvents(element);

  layers.push({
    id: layerId,
    type: "shape",
    label: shapeConfig.label,
    shapeType,
    locked: false,
    visible: true,
    listed: true,
  });

  initializeShapeStyleState(layerId);
  applyLayerOrder();
  renderLayers();
  selectLayer(layerId);
}

function cloneBaseLayer(type) {
  if (type === "text") {
    createTextElement();
    return;
  }

  const baseLayerId = `${type}-base`;
  const baseLayer = getLayer(baseLayerId);
  const baseElement = getElementByLayerId(baseLayerId);
  if (baseLayer && baseElement && !isLayerListed(baseLayer)) {
    pushHistory();
    baseLayer.visible = true;
    baseLayer.listed = true;
    baseElement.classList.remove("is-hidden");
    if (type === "title") {
      baseElement.querySelector("h2").textContent = titleInput.value || "Titre de la carte";
    }
    if (type === "source") {
      const sourceNode = getSourceTextNode(baseElement);
      if (sourceNode) {
        sourceNode.textContent = sourceInput.value || "Source : a completer";
      }
    }
    if (type === "north") {
      const northNode = baseElement.querySelector("span");
      if (northNode) {
        northNode.textContent = northLabelInput.value || "N";
      }
    }
    applyLayerOrder();
    renderLayers();
    selectLayer(baseLayerId);
    return;
  }

  const sourceElement = board.querySelector(`.board-element--${type}`);
  if (!sourceElement) {
    return;
  }

  pushHistory();
  customIndex += 1;
  const layerId = `${type}-${customIndex}`;
  const clone = sourceElement.cloneNode(true);
  clone.dataset.layerId = layerId;
  clone.style.left = `${12 + customIndex * 2}%`;
  clone.style.top = `${18 + customIndex * 2}%`;

  if (type === "title") {
    clone.querySelector("h2").id = "";
    clone.querySelector("h2").textContent = titleInput.value || "Titre de la carte";
    clone.style.width = "42%";
    clone.style.height = "16%";
  }

  if (type === "source") {
    const sourceNode = getSourceTextNode(clone);
    if (sourceNode) {
      sourceNode.id = "";
      sourceNode.textContent = sourceInput.value || "Source : a completer";
    }
    clone.style.width = "32%";
    clone.style.height = "10%";
  }

  if (type === "north") {
    clone.querySelector("span").id = "";
    clone.querySelector("span").textContent = northLabelInput.value || "N";
    clone.style.width = "10%";
    clone.style.height = "16%";
  }

  board.appendChild(clone);
  attachElementEvents(clone);
  if (["title", "source"].includes(type)) {
    initializeTextStyleState(layerId, getTextStyleState(`${type}-base`));
  }
  applyTextLayout(layerId);

  const labels = {
    title: "Titre secondaire",
    source: "Source secondaire",
    north: "Orientation secondaire",
  };

  layers.push({
    id: layerId,
    type,
    label: labels[type],
    locked: false,
    visible: true,
    listed: true,
  });

  applyLayerOrder();
  renderLayers();
  selectLayer(layerId);
}

function updateSelectedText(value) {
  if (legendSelection) {
    updateLegendSelectionText(value);
    return;
  }

  const layer = getLayer(selectedLayerId);
  const element = layer ? getElementByLayerId(layer.id) : null;
  if (!layer || !element || layer.locked) {
    return;
  }
  pushHistory();

  if (layer.id === "title-base") {
    if (isSubtitleSelectionActive()) {
      subtitleInput.value = value;
    } else {
      titleInput.value = value;
    }
    syncBaseTexts();
    renderLayers();
    return;
  }

  if (layer.id === "source-base") {
    sourceInput.value = value;
    syncBaseTexts();
    renderLayers();
    return;
  }

  if (layer.id === "north-base") {
    northLabelInput.value = value;
    syncBaseTexts();
    renderLayers();
    return;
  }

  if (layer.type === "map") {
    return;
  }

  if (layer.type === "title") {
    element.querySelector("h2").textContent = value.trim() || "Titre de la carte";
    layer.label = value.trim() || "Titre secondaire";
  } else if (layer.type === "source") {
    const sourceNode = getSourceTextNode(element);
    if (sourceNode) {
      sourceNode.textContent = value.trim() || "Source : a completer";
    }
    layer.label = value.trim() || "Source secondaire";
  } else if (layer.type === "text") {
    const textNode = element.querySelector("p");
    if (textNode) {
      textNode.textContent = value.trim() || "Texte libre";
    }
    layer.label = value.trim() || "Texte libre";
    autoSizeTextElement(layer.id);
  } else if (layer.type === "north") {
    element.querySelector("span").textContent = value.trim() || "N";
    layer.label = `Orientation ${value.trim() || "N"}`;
  } else {
    layer.label = value.trim() || "Pictogramme";
  }

  renderLayers();
}

function updateSelectedTextStyle(nextStyle) {
  if (legendSelection) {
    const sanitizedStyle = { ...nextStyle };
    if (typeof sanitizedStyle.fontSize === "number") {
      sanitizedStyle.fontSize = clamp(sanitizedStyle.fontSize, 4, 72);
    }
    updateLegendSelectionStyle(sanitizedStyle);
    return;
  }

  const selectedLayers = getUnlockedSelectedLayers();
  const shapeLayers = selectedLayers.filter((layer) => isShapeStyleLayer(layer));
  if (shapeLayers.length && !selectedLayers.some((layer) => isTextStyleLayer(layer))) {
    pushHistory();
    shapeLayers.forEach((layer) => {
      const shapeNext = {};
      if (typeof nextStyle.backgroundColor !== "undefined") {
        shapeNext.fillColor = nextStyle.backgroundColor;
        if (typeof nextStyle.bgTransparent === "undefined") {
          shapeNext.fillTransparent = false;
        }
      }
      if (typeof nextStyle.bgTransparent !== "undefined") {
        shapeNext.fillTransparent = nextStyle.bgTransparent;
      }
      applyShapeStylesToElement(layer.id, shapeNext);
    });
    refreshSelectedControls();
    return;
  }

  const targetLayers = getTextStyleTargetLayers();
  if (!targetLayers.length) {
    return;
  }

  const sanitizedStyle = { ...nextStyle };
  if (typeof sanitizedStyle.fontSize === "number") {
    sanitizedStyle.fontSize = clamp(sanitizedStyle.fontSize, 4, 72);
  }

  if (
    targetLayers.length === 1
    && targetLayers[0].id === "title-base"
    && isSubtitleSelectionActive()
  ) {
    delete sanitizedStyle.backgroundColor;
    delete sanitizedStyle.bgTransparent;
    delete sanitizedStyle.borderColor;
    delete sanitizedStyle.borderTransparent;
    pushHistory();
    applySubtitleStyles(sanitizedStyle);
    return;
  }

  pushHistory();
  targetLayers.forEach((layer) => {
    applyTextStylesToElement(layer.id, sanitizedStyle);
  });
}

function updateSelectedRotation(value) {
  const targetLayers = getRotationTargetLayers();
  if (!targetLayers.length) {
    return;
  }

  pushHistory();
  targetLayers.forEach((layer) => {
    const element = getElementByLayerId(layer.id);
    if (!element) {
      return;
    }
    element.dataset.rotation = String(value);
    if (isTextStyleLayer(layer)) {
      syncElementTextStylePresentation(layer.id);
    } else {
      setInlineStyle(element, "transform", `rotate(${value}deg)`);
    }
  });
  refreshSelectedControls();
}

function updateSelectedWidth(value) {
  const targetLayers = getResizeTargetLayers();
  if (!targetLayers.length) {
    return;
  }
  pushHistory();

  targetLayers.forEach((layer) => {
    const element = getElementByLayerId(layer.id);
    if (!element) {
      return;
    }
    const minSize = getLayerMinSize(layer);
    element.style.width = `${clamp(Number(value), minSize, 95)}%`;
    clampElementToLayerWorkArea(element, layer);
    applyTextLayout(layer.id);
  });
}

function updateSelectedHeight(value) {
  const targetLayers = getResizeTargetLayers();
  if (!targetLayers.length) {
    return;
  }
  pushHistory();

  targetLayers.forEach((layer) => {
    const element = getElementByLayerId(layer.id);
    if (!element) {
      return;
    }
    const minSize = getLayerMinSize(layer);
    element.style.height = `${clamp(Number(value), minSize, 95)}%`;
    clampElementToLayerWorkArea(element, layer);
    applyTextLayout(layer.id);
  });
}

function updateSelectedPictoSize(value) {
  const targetLayers = getPictoSizeTargetLayers();
  if (!targetLayers.length) {
    return;
  }

  const numericValue = Number(value);
  if (!Number.isFinite(numericValue)) {
    return;
  }

  pushHistory();
  const firstLayer = targetLayers[0];
  const nextSize = clamp(numericValue, getLayerMinSize(firstLayer), 95);

  targetLayers.forEach((layer) => {
    const element = getElementByLayerId(layer.id);
    if (!element) {
      return;
    }
    element.style.width = `${nextSize}%`;
    element.style.height = `${nextSize}%`;
    clampElementToLayerWorkArea(element, layer);
  });

  selectedWidth.value = formatNumberControlValue(nextSize);
  selectedHeight.value = formatNumberControlValue(nextSize);
  renderLegend();
}

function removeSelectedLayer() {
  if (clearSelectedSubtitle()) {
    return;
  }

  const selectedLayers = getSelectedLayers();
  const deletableLayers = selectedLayers.filter((layer) => canDeleteLayer(layer));
  if (!deletableLayers.length) {
    return;
  }

  pushHistory();
  deletableLayers.forEach((layer) => {
    if (layer.type === "map") {
      if (layer.id === "map-base") {
        setMapLayerSource("map-base", "");
        mapLayer.classList.remove("has-image");
        mapLayer.classList.add("is-hidden");
        mapLayer.style.visibility = "hidden";
        layer.visible = false;
        layer.listed = false;
        layer.label = "Fond cartographique";
      } else {
        const index = getLayerIndex(layer.id);
        const element = getElementByLayerId(layer.id);
        if (index !== -1) {
          layers.splice(index, 1);
        }
        if (element) {
          element.remove();
        }
      }
      selectedLayerIds.delete(layer.id);
      return;
    }

    const element = getElementByLayerId(layer.id);
    const index = getLayerIndex(layer.id);
    if (index !== -1) {
      layers.splice(index, 1);
    }
    if (element) {
      element.remove();
    }
    selectedLayerIds.delete(layer.id);
  });

  mapUpload.value = "";
  syncMapPlaceholderState();
  if (!hasAnyVisibleMapImage()) {
    updateStatusMessage("Aucune image importee pour l'instant.");
  }

  selectLayer("title-base");
  applyLayerOrder();
  renderLayers();
  refreshSelectedControls();
}

function updateInteraction(event) {
  if (!interaction) {
    return;
  }

  const layer = getLayer(interaction.layerId);
  const element = getElementByLayerId(interaction.layerId);
  if (!layer || !element || layer.locked) {
    return;
  }

  if (interaction.mode === "move") {
    const left = ((event.clientX - interaction.offsetX - board.getBoundingClientRect().left) / interaction.boardWidth) * 100;
    const top = ((event.clientY - interaction.offsetY - board.getBoundingClientRect().top) / interaction.boardHeight) * 100;
    const deltaLeft = left - interaction.startLeft;
    const deltaTop = top - interaction.startTop;
    const willMutate = Math.abs(deltaLeft) > 0.01 || Math.abs(deltaTop) > 0.01;

    if (willMutate && !interaction.historyCaptured) {
      interaction.historyCaptured = true;
      pushHistory();
    }

    interaction.initialPositions.forEach((position) => {
      const selectedElement = getElementByLayerId(position.layerId);
      const selectedLayer = getLayer(position.layerId);
      if (!selectedElement) {
        return;
      }
      const selectedWidth = parseFloat(selectedElement.style.width || "12");
      const selectedHeight = parseFloat(selectedElement.style.height || "12");
      const workArea = getLayerWorkAreaRect(selectedLayer);
      selectedElement.style.left = `${clamp(position.left + deltaLeft, workArea.left, workArea.right - selectedWidth)}%`;
      selectedElement.style.top = `${clamp(position.top + deltaTop, workArea.top, workArea.bottom - selectedHeight)}%`;
    });

    if (interaction.layerType === "picto") {
      const nowInMap = isFullyInsideMapArea(interaction.layerId);
      if (interaction.wasInMap !== nowInMap) {
        interaction.wasInMap = nowInMap;
        renderLayers();
      }
    }

    if (willMutate) {
      interaction.didMutate = true;
    }
    return;
  }

  const deltaX = ((event.clientX - interaction.startX) / interaction.boardWidth) * 100;
  const deltaY = ((event.clientY - interaction.startY) / interaction.boardHeight) * 100;
  const minSize = getLayerMinSize(layer);
  const workArea = getLayerWorkAreaRect(layer);
  let nextLeft = interaction.startLeft;
  let nextTop = interaction.startTop;
  let nextWidth = interaction.startWidth;
  let nextHeight = interaction.startHeight;
  const direction = interaction.resizeDirection || "bottom-right";

  if (direction.includes("right")) {
    nextWidth = clamp(interaction.startWidth + deltaX, minSize, workArea.right - interaction.startLeft);
  }

  if (direction.includes("left")) {
    nextLeft = clamp(interaction.startLeft + deltaX, workArea.left, interaction.startLeft + interaction.startWidth - minSize);
    nextWidth = clamp(interaction.startWidth - deltaX, minSize, workArea.width);
    if (nextLeft + nextWidth > workArea.right) {
      nextWidth = workArea.right - nextLeft;
    }
  }

  if (direction.includes("bottom")) {
    nextHeight = clamp(interaction.startHeight + deltaY, minSize, workArea.bottom - interaction.startTop);
  }

  if (direction.includes("top")) {
    nextTop = clamp(interaction.startTop + deltaY, workArea.top, interaction.startTop + interaction.startHeight - minSize);
    nextHeight = clamp(interaction.startHeight - deltaY, minSize, workArea.height);
    if (nextTop + nextHeight > workArea.bottom) {
      nextHeight = workArea.bottom - nextTop;
    }
  }

  if (["top", "bottom"].includes(direction)) {
    nextWidth = interaction.startWidth;
  }

  if (["left", "right"].includes(direction)) {
    nextHeight = interaction.startHeight;
  }

  const willMutate =
    Math.abs(nextLeft - interaction.startLeft) > 0.01 ||
    Math.abs(nextTop - interaction.startTop) > 0.01 ||
    Math.abs(nextWidth - interaction.startWidth) > 0.01 ||
    Math.abs(nextHeight - interaction.startHeight) > 0.01;

  if (willMutate && !interaction.historyCaptured) {
    interaction.historyCaptured = true;
    pushHistory();
  }

  element.style.left = `${clamp(nextLeft, workArea.left, workArea.right - minSize)}%`;
  element.style.top = `${clamp(nextTop, workArea.top, workArea.bottom - minSize)}%`;
  element.style.width = `${clamp(nextWidth, minSize, workArea.right - nextLeft)}%`;
  element.style.height = `${clamp(nextHeight, minSize, workArea.bottom - nextTop)}%`;

  if (interaction.layerType === "picto") {
    const nowInMap = isFullyInsideMapArea(interaction.layerId);
    if (interaction.wasInMap !== nowInMap) {
      interaction.wasInMap = nowInMap;
      renderLayers();
    }
  }

  if (willMutate) {
    interaction.didMutate = true;
  }
  applyTextLayout(layer.id);
  refreshSelectedControls();
}

function endInteraction() {
  if (!interaction) {
    return;
  }
  renderLayers();
  interaction = null;
  refreshSelectedControls();
}

function readFileAsDataUrl(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result || ""));
    reader.onerror = () => reject(new Error("project-file-read-failed"));
    reader.readAsText(file, "utf-8");
  });
}

function waitForImageLoad(image, src) {
  return new Promise((resolve, reject) => {
    image.onload = () => resolve();
    image.onerror = () => reject(new Error("image-load-failed"));
    image.src = src;
  });
}

async function importCustomPictos(files) {
  const fileList = [...files];
  for (const file of fileList) {
    customIndex += 1;
    const key = `custom-library-${customIndex}`;
    const dataUrl = await readFileAsDataUrl(file);
    pictoCatalog[key] = {
      label: file.name.replace(/\.[^.]+$/, ""),
      src: dataUrl,
      group: "",
    };
  }

  renderPictoLibrary();
  markDocumentModified();
}

function resetWorkspace() {
  pushHistory();
  setMapLayerSource("map-base", "");
  mapLayer.classList.remove("has-image");
  resetMapLayerFrame();
  mapLayer.style.visibility = "visible";
  syncMapPlaceholderState();
  updateStatusMessage("Aucune image importee pour l'instant.");
  mapUpload.value = "";

  layers
    .filter((layer) => !BASE_LAYER_IDS.includes(layer.id))
    .forEach((layer) => {
      const element = getElementByLayerId(layer.id);
      if (element) {
        element.remove();
      }
    });

  for (let index = layers.length - 1; index >= 0; index -= 1) {
    if (!BASE_LAYER_IDS.includes(layers[index].id)) {
      layers.splice(index, 1);
    }
  }

  currentExportFormatId = EXPORT_FORMATS[0].id;
  currentBoardTemplateId = DEFAULT_BOARD_TEMPLATE_ID;

  const titleElement = getElementByLayerId("title-base");
  const leftHeaderLogoElement = getElementByLayerId("header-logo-left-base");
  const rightHeaderLogoElement = getElementByLayerId("header-logo-right-base");
  const sourceElement = getElementByLayerId("source-base");
  const northElement = getElementByLayerId("north-base");

  titleElement.style.left = `${getCurrentTitleFrame().left}%`;
  titleElement.style.top = `${getCurrentTitleFrame().top}%`;
  titleElement.style.width = `${getCurrentTitleFrame().width}%`;
  titleElement.style.height = `${getCurrentTitleFrame().height}%`;
  applyCurrentFormatTitleStylePreset();

  sourceElement.style.left = `${getCurrentSourceFrame().left}%`;
  sourceElement.style.top = `${getCurrentSourceFrame().top}%`;
  sourceElement.style.width = `${getCurrentSourceFrame().width}%`;
  sourceElement.style.height = `${getCurrentSourceFrame().height}%`;
  initializeTextStyleState("source-base");
  sourceElement.dataset.rotation = "180";

  northElement.style.left = `${getCurrentNorthFrame().left}%`;
  northElement.style.top = `${getCurrentNorthFrame().top}%`;
  northElement.style.width = `${getCurrentNorthFrame().width}%`;
  northElement.style.height = `${getCurrentNorthFrame().height}%`;

  if (leftHeaderLogoElement) {
    leftHeaderLogoElement.style.left = "0%";
    leftHeaderLogoElement.style.top = "0%";
    leftHeaderLogoElement.style.width = "0%";
    leftHeaderLogoElement.style.height = "0%";
  }
  if (rightHeaderLogoElement) {
    rightHeaderLogoElement.style.left = "0%";
    rightHeaderLogoElement.style.top = "0%";
    rightHeaderLogoElement.style.width = "0%";
    rightHeaderLogoElement.style.height = "0%";
  }

  layers.forEach((layer) => {
    layer.visible = false;
    layer.locked = false;
    layer.listed = false;
  });

  const mapBaseLayer = getLayer("map-base");
  if (mapBaseLayer) {
    mapBaseLayer.visible = true;
    mapBaseLayer.listed = false;
    mapBaseLayer.locked = false;
    mapBaseLayer.label = "Fond cartographique";
    mapBaseLayer.src = "";
    mapBaseLayer.mapSlotIndex = 0;
  }

  const titleBaseLayer = getLayer("title-base");
  if (titleBaseLayer) {
    titleBaseLayer.visible = true;
    titleBaseLayer.listed = true;
    titleBaseLayer.locked = false;
  }

  board.querySelectorAll("[data-layer-id]").forEach((element) => {
    element.classList.remove("is-hidden", "is-locked");
    if (element.dataset.layerId) {
      element.classList.add("is-hidden");
    }
  });

  getElementByLayerId("map-base")?.classList.remove("is-hidden");
  getElementByLayerId("title-base")?.classList.remove("is-hidden");

  titleInput.value = "Titre de la carte";
  subtitleInput.value = "Sous-titre ou precision territoriale";
  sourceInput.value = "Source : a completer";
  northLabelInput.value = "N";
  selectedTitleTextTarget = "title";
  legendSectionsState = [];
  applyBoardTemplate(DEFAULT_BOARD_TEMPLATE_ID, { pushToHistory: false, markModified: false, refreshUi: false });
  syncMapPlaceholderState();

  setBoardText(boardTitle, titleInput.value, "Titre de la carte");
  setBoardText(boardSubtitle, subtitleInput.value, "Sous-titre ou precision territoriale", { allowEmpty: true });
  setBoardText(boardSource, sourceInput.value, "Source : a completer");
  setBoardText(northLabel, northLabelInput.value, "N");
  syncReportHeaderLogoLayers({ forceDefaultFrame: true });
  applyTextLayout("title-base");
  applyTextLayout("source-base");
  clearSelection();
  refreshSelectedControls();
  applyLayerOrder();
  renderLayers();
  renderBoardTemplateLibrary();
  refreshExportFormatUi();
  openStartupWizard(1);
}

function setExportState(isBusy, label = "") {
  exportImageButton.disabled = isBusy;
  exportImageButton.textContent = isBusy
    ? (label || "Export en cours...")
    : getExportButtonIdleLabel();
}

function updateStatusMessage(message, assertive = false) {
  uploadStatus.textContent = message;
  uploadStatus.setAttribute("aria-live", assertive ? "assertive" : "polite");
}

function sanitizeProjectFileName(value) {
  const normalized = String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .toLowerCase();
  return normalized || "projet-cartographique";
}

function collectProjectPictos() {
  const pictos = {};
  Object.entries(pictoCatalog).forEach(([key, config]) => {
    if (!config || typeof config !== "object") {
      return;
    }
    const label = String(config.label || "").trim();
    const src = String(config.src || "").trim();
    const group = String(config.group || "").trim();
    if (!label || !src) {
      return;
    }
    pictos[key] = { label, src, group };
  });
  return pictos;
}

function buildProjectPayload() {
  // Ensure legend groups/items are synced with the current board before saving.
  syncLegendSectionsWithVisibleEntries();
  const snapshot = snapshotState();
  return {
    format: "composeur-cartographique-project",
    version: PROJECT_FILE_VERSION,
    savedAt: new Date().toISOString(),
    title: titleInput.value.trim() || "Projet cartographique",
    state: snapshot,
    legend: {
      widthPercent: snapshot.legendWidthPercent,
      sections: deepClone(snapshot.legendSectionsState || []),
      sectionCounter: legendSectionCounter,
    },
    pictos: collectProjectPictos(),
  };
}

function downloadProjectPayload(projectPayload) {
  const blob = new Blob([`${JSON.stringify(projectPayload, null, 2)}\n`], {
    type: "application/json;charset=utf-8",
  });
  const link = document.createElement("a");
  const objectUrl = URL.createObjectURL(blob);
  const safeTitle = sanitizeProjectFileName(projectPayload?.title || "");
  link.href = objectUrl;
  link.download = `${safeTitle}.carto.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(objectUrl);
}

function inferCustomIndexFromLayerIds(nextLayers = []) {
  let inferred = 0;
  nextLayers.forEach((layer) => {
    const match = String(layer?.id || "").match(/-(\d+)$/);
    if (!match) {
      return;
    }
    inferred = Math.max(inferred, Number(match[1]) || 0);
  });
  return inferred;
}

function inferLegendSectionCounterFromState(sections = []) {
  let inferred = 0;
  sections.forEach((section) => {
    const match = String(section?.id || "").match(/^legend-section-(\d+)$/);
    if (!match) {
      return;
    }
    inferred = Math.max(inferred, Number(match[1]) || 0);
  });
  return inferred;
}

function mergeImportedPictos(pictos = {}) {
  if (!pictos || typeof pictos !== "object") {
    return;
  }

  Object.entries(pictos).forEach(([rawKey, config], index) => {
    if (!config || typeof config !== "object") {
      return;
    }
    const label = String(config.label || "").trim();
    const src = String(config.src || "").trim();
    const group = String(config.group || "").trim();
    if (!label || !src) {
      return;
    }
    const safeKey = String(rawKey || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9_-]+/g, "-")
      || `imported-picto-${index + 1}`;
    pictoCatalog[safeKey] = { label, src, group };
  });

  renderPictoLibrary();
  renderFavoritePictos();
  applyPictoSearchFilter();
}

function normalizeProjectPayload(data) {
  if (!data || typeof data !== "object") {
    return null;
  }

  if (data.state && typeof data.state === "object") {
    const normalizedState = deepClone(data.state);
    if (data.legend && typeof data.legend === "object") {
      if (Array.isArray(data.legend.sections)) {
        normalizedState.legendSectionsState = deepClone(data.legend.sections);
      }
      if (Number.isFinite(Number(data.legend.widthPercent))) {
        normalizedState.legendWidthPercent = Number(data.legend.widthPercent);
      }
      if (!Number.isFinite(Number(normalizedState.legendSectionCounter)) && Number.isFinite(Number(data.legend.sectionCounter))) {
        normalizedState.legendSectionCounter = Number(data.legend.sectionCounter);
      }
    }

    return {
      title: String(data.title || "Projet cartographique").trim() || "Projet cartographique",
      state: normalizedState,
      pictos: data.pictos || {},
    };
  }

  if (Array.isArray(data.layers)) {
    return {
      title: "Projet cartographique",
      state: data,
      pictos: {},
    };
  }

  return null;
}

function validateProjectState(state) {
  return Boolean(
    state &&
    typeof state === "object" &&
    Array.isArray(state.layers),
  );
}

function saveProjectToFile() {
  try {
    const payload = buildProjectPayload();
    downloadProjectPayload(payload);
    updateStatusMessage(`Projet enregistre : ${payload.title}`);
  } catch (error) {
    updateStatusMessage("L'enregistrement du projet a echoue.", true);
  }
}

function applyImportedProject(payload) {
  if (!payload || !validateProjectState(payload.state)) {
    throw new Error("invalid-project-state");
  }

  pushHistory();
  redoStack = [];
  mergeImportedPictos(payload.pictos);
  restoreState(payload.state);
  markDocumentModified();
  updateHistoryButtons();
  updateStatusMessage(`Projet importe : ${payload.title}`);
}

async function importProjectFromFile(file) {
  if (!file) {
    return;
  }

  const fileContent = await readFileAsText(file);
  let parsed;
  try {
    parsed = JSON.parse(fileContent);
  } catch (error) {
    throw new Error("project-json-parse-failed");
  }

  const payload = normalizeProjectPayload(parsed);
  if (!payload) {
    throw new Error("invalid-project-format");
  }

  applyImportedProject(payload);
}

function downloadCanvas(canvas, fileName = "mise-en-page-cartographique.png") {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("png-blob-generation-failed"));
        return;
      }

      const link = document.createElement("a");
      const objectUrl = URL.createObjectURL(blob);
      link.href = objectUrl;
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(objectUrl);
      resolve();
    }, "image/png");
  });
}

function downloadBlob(blob, fileName) {
  return new Promise((resolve) => {
    const link = document.createElement("a");
    const objectUrl = URL.createObjectURL(blob);
    link.href = objectUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(objectUrl);
    resolve();
  });
}

function blobToUint8Array(blob) {
  return blob.arrayBuffer().then((buffer) => new Uint8Array(buffer));
}

function mergeUint8Arrays(parts) {
  const totalLength = parts.reduce((sum, part) => sum + part.length, 0);
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  parts.forEach((part) => {
    merged.set(part, offset);
    offset += part.length;
  });
  return merged;
}

function buildPdfObject(objectId, content) {
  const encoder = new TextEncoder();
  return mergeUint8Arrays([
    encoder.encode(`${objectId} 0 obj\n`),
    content,
    encoder.encode("\nendobj\n"),
  ]);
}

function buildSingleImagePdf(jpegBytes, imageWidth, imageHeight, pageWidthPt, pageHeightPt) {
  const encoder = new TextEncoder();
  const safePageWidth = Number(pageWidthPt) || 841.89;
  const safePageHeight = Number(pageHeightPt) || 595.28;
  const safeImageWidth = Math.max(1, Math.round(Number(imageWidth) || 1));
  const safeImageHeight = Math.max(1, Math.round(Number(imageHeight) || 1));
  const imageRatio = safeImageWidth / safeImageHeight;

  let drawWidth = safePageWidth;
  let drawHeight = drawWidth / imageRatio;
  if (drawHeight > safePageHeight) {
    drawHeight = safePageHeight;
    drawWidth = drawHeight * imageRatio;
  }

  const offsetX = (safePageWidth - drawWidth) / 2;
  const offsetY = (safePageHeight - drawHeight) / 2;
  const contentStream = `q\n${drawWidth.toFixed(2)} 0 0 ${drawHeight.toFixed(2)} ${offsetX.toFixed(2)} ${offsetY.toFixed(2)} cm\n/Im0 Do\nQ\n`;

  const objects = [
    buildPdfObject(1, encoder.encode("<< /Type /Catalog /Pages 2 0 R >>")),
    buildPdfObject(2, encoder.encode("<< /Type /Pages /Kids [3 0 R] /Count 1 >>")),
    buildPdfObject(
      3,
      encoder.encode(
        `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${safePageWidth.toFixed(2)} ${safePageHeight.toFixed(2)}] /Resources << /ProcSet [/PDF /ImageC] /XObject << /Im0 4 0 R >> >> /Contents 5 0 R >>`,
      ),
    ),
    mergeUint8Arrays([
      encoder.encode(
        `4 0 obj\n<< /Type /XObject /Subtype /Image /Width ${safeImageWidth} /Height ${safeImageHeight} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${jpegBytes.length} >>\nstream\n`,
      ),
      jpegBytes,
      encoder.encode("\nendstream\nendobj\n"),
    ]),
    buildPdfObject(
      5,
      encoder.encode(`<< /Length ${contentStream.length} >>\nstream\n${contentStream}endstream`),
    ),
  ];

  const header = new Uint8Array([37, 80, 68, 70, 45, 49, 46, 52, 10, 37, 226, 227, 207, 211, 10]);
  const parts = [header];
  const offsets = [0];
  let currentOffset = header.length;

  objects.forEach((objectBytes) => {
    offsets.push(currentOffset);
    parts.push(objectBytes);
    currentOffset += objectBytes.length;
  });

  const xrefStart = currentOffset;
  const xrefLines = [
    `xref\n0 ${objects.length + 1}\n`,
    "0000000000 65535 f \n",
    ...offsets.slice(1).map((offset) => `${String(offset).padStart(10, "0")} 00000 n \n`),
    `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`,
  ];
  parts.push(encoder.encode(xrefLines.join("")));

  return new Blob([mergeUint8Arrays(parts)], { type: "application/pdf" });
}

function canvasToJpegBlob(canvas, quality = 0.96) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("jpeg-blob-generation-failed"));
        return;
      }
      resolve(blob);
    }, "image/jpeg", quality);
  });
}

async function downloadCanvasAsPdf(canvas, exportFormat, fileName) {
  const jpegBlob = await canvasToJpegBlob(canvas, 0.96);
  const jpegBytes = await blobToUint8Array(jpegBlob);
  const pdfBlob = buildSingleImagePdf(
    jpegBytes,
    canvas.width,
    canvas.height,
    exportFormat.pageWidthPt,
    exportFormat.pageHeightPt,
  );
  await downloadBlob(pdfBlob, fileName);
}

function drawWrappedText(context, text, x, y, maxWidth, lineHeight) {
  const words = text.split(" ");
  let line = "";
  let currentY = y;

  words.forEach((word, index) => {
    const testLine = `${line}${word} `;
    if (context.measureText(testLine).width > maxWidth && index > 0) {
      context.fillText(line.trim(), x, currentY);
      line = `${word} `;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line.trim()) {
    context.fillText(line.trim(), x, currentY);
  }
}

function getWrappedLines(context, text, maxWidth) {
  const words = String(text || "").split(" ");
  const lines = [];
  let line = "";

  words.forEach((word, index) => {
    const testLine = `${line}${word} `;
    if (context.measureText(testLine).width > maxWidth && index > 0) {
      lines.push(line.trim());
      line = `${word} `;
    } else {
      line = testLine;
    }
  });

  if (line.trim()) {
    lines.push(line.trim());
  }

  return lines.length ? lines : [""];
}

function loadExportImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.crossOrigin = "anonymous";
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error(`Impossible de charger l'image: ${src}`));
    image.src = src;
  });
}

function drawImageCover(context, image, x, y, width, height) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  if (!sourceWidth || !sourceHeight || !width || !height) {
    return;
  }
  context.drawImage(image, 0, 0, sourceWidth, sourceHeight, x, y, width, height);
}

function drawImageContain(context, image, x, y, width, height) {
  const sourceWidth = image.naturalWidth || image.width;
  const sourceHeight = image.naturalHeight || image.height;
  if (!sourceWidth || !sourceHeight || !width || !height) {
    return;
  }

  const sourceRatio = sourceWidth / sourceHeight;
  const targetRatio = width / height;
  let drawWidth = width;
  let drawHeight = height;

  if (sourceRatio > targetRatio) {
    drawHeight = width / sourceRatio;
  } else {
    drawWidth = height * sourceRatio;
  }

  const drawX = x + (width - drawWidth) / 2;
  const drawY = y + (height - drawHeight) / 2;
  context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
}

function collectExportStylesheetText() {
  const chunks = [];

  [...document.styleSheets].forEach((styleSheet) => {
    try {
      const rules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("\n");
      if (rules.trim()) {
        chunks.push(rules);
      }
    } catch (error) {
      // Ignore inaccessible stylesheets.
    }
  });

  return chunks.join("\n");
}

function prepareBoardCloneForExport(exportWidth = EXPORT_BASE_WIDTH, exportHeight = EXPORT_BASE_HEIGHT) {
  const boardClone = board.cloneNode(true);
  boardClone.id = "board-export-clone";
  boardClone.style.transform = "none";
  boardClone.style.zoom = "";
  boardClone.style.width = `${exportWidth}px`;
  boardClone.style.height = `${exportHeight}px`;
  boardClone.style.maxWidth = `${exportWidth}px`;
  boardClone.style.aspectRatio = "auto";
  boardClone.style.margin = "0";
  boardClone.style.boxShadow = "none";
  boardClone.style.position = "relative";
  boardClone.style.left = "0";
  boardClone.style.top = "0";

  boardClone.querySelectorAll(".resize-handle").forEach((handle) => handle.remove());
  boardClone.querySelector("#boardTemplateGuides")?.remove();
  boardClone.querySelector("#legendResizer")?.remove();
  boardClone.querySelectorAll(".is-selected").forEach((element) => element.classList.remove("is-selected"));
  boardClone.querySelectorAll(".is-drop-target").forEach((element) => element.classList.remove("is-drop-target"));

  const cloneEmptyMapState = boardClone.querySelector("#emptyMapState");
  if (cloneEmptyMapState) {
    cloneEmptyMapState.hidden = emptyMapState.hidden;
  }

  return boardClone;
}

async function renderBoardDomSnapshotToCanvas(canvas, exportWidth = EXPORT_BASE_WIDTH, exportHeight = EXPORT_BASE_HEIGHT) {
  const stylesheetText = collectExportStylesheetText();
  if (!stylesheetText.trim()) {
    throw new Error("export-styles-unavailable");
  }

  const boardClone = prepareBoardCloneForExport(exportWidth, exportHeight);
  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${exportWidth}" height="${exportHeight}" viewBox="0 0 ${exportWidth} ${exportHeight}">
      <foreignObject width="100%" height="100%">
        <div xmlns="http://www.w3.org/1999/xhtml" style="width:${exportWidth}px;height:${exportHeight}px;overflow:hidden;background:#ffffff;">
          <style><![CDATA[
${stylesheetText}
          ]]></style>
          ${boardClone.outerHTML}
        </div>
      </foreignObject>
    </svg>
  `.trim();

  const svgBlob = new Blob([svgMarkup], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  try {
    const image = await loadExportImage(svgUrl);
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.drawImage(image, 0, 0, canvas.width, canvas.height);
  } finally {
    URL.revokeObjectURL(svgUrl);
  }
}

function mapDomRectToCanvas(domRect, boardRect, canvas) {
  const x = ((domRect.left - boardRect.left) / boardRect.width) * canvas.width;
  const y = ((domRect.top - boardRect.top) / boardRect.height) * canvas.height;
  const width = (domRect.width / boardRect.width) * canvas.width;
  const height = (domRect.height / boardRect.height) * canvas.height;
  return { x, y, width, height };
}

function mapPercentRectToCanvas(rectPercent, canvas) {
  if (!rectPercent) {
    return { x: 0, y: 0, width: 0, height: 0 };
  }

  return {
    x: (Number(rectPercent.left) || 0) * canvas.width / 100,
    y: (Number(rectPercent.top) || 0) * canvas.height / 100,
    width: (Number(rectPercent.width) || 0) * canvas.width / 100,
    height: (Number(rectPercent.height) || 0) * canvas.height / 100,
  };
}

function drawCanvasOutlineRect(context, rect, color, lineWidth = 1) {
  if (!context || !rect || rect.width <= 0 || rect.height <= 0) {
    return;
  }

  const safeLineWidth = Math.max(1, Number(lineWidth) || 1);
  const halfLine = safeLineWidth / 2;
  context.save();
  context.strokeStyle = color;
  context.lineWidth = safeLineWidth;
  context.strokeRect(
    rect.x + halfLine,
    rect.y + halfLine,
    Math.max(0, rect.width - safeLineWidth),
    Math.max(0, rect.height - safeLineWidth),
  );
  context.restore();
}

function drawPrintableFrameOverlays(context, canvas, format = getCurrentExportFormat()) {
  if (!isPdfExportFormat(format)) {
    return;
  }

  const logicalWidth = Number(format.logicalWidth) || canvas.width || 1;
  const exportPixelScale = canvas.width / Math.max(1, logicalWidth);
  const outlineWidth = Math.max(1, exportPixelScale);
  const contentFrameRect = mapPercentRectToCanvas(getBoardContentFramePercent(format), canvas);
  const headerFrameRect = mapPercentRectToCanvas({
    ...getBoardContentFramePercent(format),
    height: getBoardHeaderHeightPercent(format),
  }, canvas);

  drawCanvasOutlineRect(context, contentFrameRect, "#000091", outlineWidth);
  drawCanvasOutlineRect(context, headerFrameRect, "#000091", outlineWidth);
}

function drawLegendSeparatorOverlay(context, boardRect, canvas, format = getCurrentExportFormat()) {
  if (!legendPanel || !context || !canvas) {
    return;
  }

  const panelRect = mapDomRectToCanvas(legendPanel.getBoundingClientRect(), boardRect, canvas);
  const contentFrameRect = mapPercentRectToCanvas(getBoardContentFramePercent(format), canvas);
  const bodyFrameRect = mapPercentRectToCanvas(getBoardBodyFramePercent(format), canvas);

  context.save();
  context.strokeStyle = "#9096ba";
  context.lineWidth = 1;
  context.beginPath();
  if (getCurrentLegendPlacement() === "bottom") {
    context.moveTo(contentFrameRect.x, panelRect.y + 0.5);
    context.lineTo(contentFrameRect.x + contentFrameRect.width, panelRect.y + 0.5);
  } else {
    context.moveTo(panelRect.x + 0.5, bodyFrameRect.y);
    context.lineTo(panelRect.x + 0.5, contentFrameRect.y + contentFrameRect.height);
  }
  context.stroke();
  context.restore();
}

async function drawVisibleMapLayersOnCanvas(context, boardRect, canvas) {
  for (const layer of layers) {
    if (layer.type !== "map" || !layer.visible) {
      continue;
    }

    const mapSource = getMapLayerSource(layer);
    if (!mapSource) {
      continue;
    }

    const element = getElementByLayerId(layer.id);
    if (!element) {
      continue;
    }

    try {
      const image = await loadExportImage(mapSource);
      const mapRect = mapDomRectToCanvas(element.getBoundingClientRect(), boardRect, canvas);
      drawImageContain(context, image, mapRect.x, mapRect.y, mapRect.width, mapRect.height);
    } catch (error) {
      // Ignore invalid map image to avoid blocking full export.
    }
  }
}

async function exportBoardAsImage(format = getCurrentExportFormat()) {
  const exportFormat = getExportFormatById(format?.id || format || currentExportFormatId);
  const exportWidth = Number(exportFormat.logicalWidth) || EXPORT_BASE_WIDTH;
  const exportHeight = Number(exportFormat.logicalHeight) || EXPORT_BASE_HEIGHT;
  const exportScale = Number(exportFormat.scale) || EXPORT_OUTPUT_SCALE;
  const exportKind = exportFormat.outputType === "pdf" ? "PDF" : "PNG";
  const exportFileExtension = exportFormat.outputType === "pdf" ? "pdf" : "png";
  const exportFileName = `mise-en-page-cartographique-${exportFormat.fileSuffix || exportFormat.id || "export"}.${exportFileExtension}`;

  setExportState(true, `Export ${exportKind} en cours...`);
  updateStatusMessage(`Export ${exportKind} ${exportFormat.label} en cours...`);
  const previousZoomLevel = zoomLevel;
  const exportZoomLevel = ZOOM_BASELINE * (EXPORT_DEFAULT_ZOOM_PERCENT / 100);
  const shouldForceExportZoom = Math.abs(previousZoomLevel - exportZoomLevel) > 0.0001;

  try {
    if (shouldForceExportZoom) {
      zoomLevel = exportZoomLevel;
      updateZoom();
      await new Promise((resolve) => requestAnimationFrame(resolve));
    }

    const renderCanvas = document.createElement("canvas");
    const boardRect = board.getBoundingClientRect();
    renderCanvas.width = exportWidth * exportScale;
    renderCanvas.height = exportHeight * exportScale;

    const context = renderCanvas.getContext("2d");
    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    let usedDomSnapshot = false;

    try {
      await renderBoardDomSnapshotToCanvas(renderCanvas, exportWidth, exportHeight);
      usedDomSnapshot = true;
    } catch (snapshotError) {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, renderCanvas.width, renderCanvas.height);

      context.strokeStyle = "#9096ba";
      context.lineWidth = 2;
      context.strokeRect(0, 0, renderCanvas.width, renderCanvas.height);

      await drawVisibleMapLayersOnCanvas(context, boardRect, renderCanvas);
      await drawElementsOnCanvas(context, boardRect, renderCanvas);
      await drawLegendOnCanvas(context, boardRect, renderCanvas);
    }

    drawPrintableFrameOverlays(context, renderCanvas, exportFormat);
    drawLegendSeparatorOverlay(context, boardRect, renderCanvas, exportFormat);
    drawReportHeaderTextOverlay(context, boardRect, renderCanvas, exportFormat);

    if (exportFormat.outputType === "pdf") {
      await downloadCanvasAsPdf(renderCanvas, exportFormat, exportFileName);
    } else {
      await downloadCanvas(renderCanvas, exportFileName);
    }
    updateStatusMessage(usedDomSnapshot
      ? `Export ${exportFormat.label} termine : rendu fidele telecharge.`
      : `Export ${exportFormat.label} termine : fichier ${exportKind} telecharge.`);
    setExportState(false);
  } catch (error) {
    setExportState(false);
    updateStatusMessage(`Echec export ${exportKind}. Reessayez apres actualisation.`, true);
    alert(`L'export ${exportKind} a echoue. Rechargez la page puis reessayez.`);
  } finally {
    if (shouldForceExportZoom) {
      zoomLevel = previousZoomLevel;
      updateZoom();
    }
  }
}

async function drawLegendSymbol(context, entry, x, y, size) {
  if (entry.layerType === "picto" && entry.src) {
    try {
      const image = await loadExportImage(entry.src);
      drawImageContain(context, image, x, y, size, size);
      return;
    } catch (error) {
      context.fillStyle = "#67d59a";
      context.beginPath();
      context.arc(x + size / 2, y + size / 2, size / 2, 0, Math.PI * 2);
      context.fill();
      return;
    }
  }

  if (entry.layerType === "north") {
    context.fillStyle = "#000091";
    context.beginPath();
    context.moveTo(x + size / 2, y);
    context.lineTo(x, y + size);
    context.lineTo(x + size, y + size);
    context.closePath();
    context.fill();
    return;
  }

  context.fillStyle = "#111827";
  context.fillRect(x, y + size / 2 - 1.5, size, 3);
}

function getCanvasScale(boardRect, canvas) {
  const logicalBoardWidth = board.offsetWidth || board.clientWidth || boardRect.width;
  const logicalBoardHeight = board.offsetHeight || board.clientHeight || boardRect.height;
  return {
    x: canvas.width / Math.max(1, logicalBoardWidth),
    y: canvas.height / Math.max(1, logicalBoardHeight),
  };
}

function drawTextNodeInRect(context, node, text, rect, boardRect, canvas, options = {}) {
  if (!node || !text || !rect.width || !rect.height) {
    return;
  }

  const styles = window.getComputedStyle(node);
  const scale = getCanvasScale(boardRect, canvas);
  const fontScale = (scale.x + scale.y) / 2;
  const fontSize = Math.max(8, (parseFloat(styles.fontSize) || 12) * fontScale);
  const fontWeight = styles.fontWeight || "400";
  const fontStyle = styles.fontStyle || "normal";
  const fontFamily = styles.fontFamily || "Marianne, Arial, sans-serif";
  const lineHeightCss = parseFloat(styles.lineHeight);
  const lineHeight = Number.isFinite(lineHeightCss) ? Math.max(fontSize, lineHeightCss * scale.y) : Math.max(fontSize, fontSize * 1.2);
  const paddingX = options.paddingX ?? 0;
  const paddingY = options.paddingY ?? 0;
  const textAlign = options.textAlign || "left";
  const verticalAlign = options.verticalAlign || "top";
  const maxWidth = Math.max(2, rect.width - paddingX * 2);

  context.fillStyle = styles.color || "#161616";
  context.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
  context.textAlign = textAlign;
  context.textBaseline = "top";

  context.save();
  context.beginPath();
  context.rect(rect.x, rect.y, rect.width, rect.height);
  context.clip();

  const lines = getWrappedLines(context, text, maxWidth);
  const maxLines = Math.max(1, Math.floor((rect.height - paddingY * 2) / lineHeight));
  const visibleLines = lines.slice(0, maxLines);
  const textBlockHeight = visibleLines.length * lineHeight;
  let startY = rect.y + paddingY;
  if (verticalAlign === "middle") {
    startY = rect.y + Math.max(paddingY, (rect.height - textBlockHeight) / 2);
  } else if (verticalAlign === "bottom") {
    startY = rect.y + Math.max(paddingY, rect.height - paddingY - textBlockHeight);
  }
  const textX = textAlign === "center"
    ? rect.x + (rect.width / 2)
    : textAlign === "right"
      ? rect.x + rect.width - paddingX
      : rect.x + paddingX;

  visibleLines.forEach((line, index) => {
    context.fillText(line, textX, startY + (index * lineHeight));
  });
  context.restore();
}

function drawFittedTextNodeInRect(context, node, text, rect, boardRect, canvas, options = {}) {
  if (!node || !text || !rect.width || !rect.height) {
    return;
  }

  const styles = window.getComputedStyle(node);
  const scale = getCanvasScale(boardRect, canvas);
  const fontSizeCss = parseFloat(styles.fontSize) || 12;
  const fontScale = (scale.x + scale.y) / 2;
  const baseFontSize = Math.max(8, fontSizeCss * fontScale);
  const minFontSize = Math.max(6, Number(options.minFontSize) || 8);
  const fontWeight = styles.fontWeight || "400";
  const fontStyle = styles.fontStyle || "normal";
  const fontFamily = styles.fontFamily || "Marianne, Arial, sans-serif";
  const lineHeightCss = parseFloat(styles.lineHeight);
  const lineHeightFactor = Number.isFinite(lineHeightCss) && fontSizeCss > 0
    ? clamp(lineHeightCss / fontSizeCss, 1, 1.8)
    : 1.2;
  const paddingX = options.paddingX ?? 0;
  const paddingY = options.paddingY ?? 0;
  const textAlign = options.textAlign || "left";
  const verticalAlign = options.verticalAlign || "top";
  const maxWidth = Math.max(2, rect.width - paddingX * 2);
  const maxHeight = Math.max(2, rect.height - paddingY * 2);

  let fontSize = baseFontSize;
  let lineHeight = Math.max(fontSize, fontSize * lineHeightFactor);
  let lines = [String(text || "")];

  while (fontSize >= minFontSize) {
    context.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
    lines = getWrappedLines(context, text, maxWidth);
    lineHeight = Math.max(fontSize, fontSize * lineHeightFactor);
    if ((lines.length * lineHeight) <= maxHeight + 0.5) {
      break;
    }
    fontSize -= 0.5;
  }

  const visibleLines = lines;
  const textBlockHeight = visibleLines.length * lineHeight;
  const textX = textAlign === "center"
    ? rect.x + (rect.width / 2)
    : textAlign === "right"
      ? rect.x + rect.width - paddingX
      : rect.x + paddingX;
  let startY = rect.y + paddingY;
  if (verticalAlign === "middle") {
    startY = rect.y + Math.max(paddingY, (rect.height - textBlockHeight) / 2);
  } else if (verticalAlign === "bottom") {
    startY = rect.y + Math.max(paddingY, rect.height - paddingY - textBlockHeight);
  }

  context.save();
  context.fillStyle = styles.color || "#161616";
  context.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`;
  context.textAlign = textAlign;
  context.textBaseline = "top";
  context.beginPath();
  context.rect(rect.x, rect.y, rect.width, rect.height);
  context.clip();
  visibleLines.forEach((line, index) => {
    context.fillText(line, textX, startY + (index * lineHeight));
  });
  context.restore();
}

function mapNodeRectInsideElementToCanvas(node, element, boardRect, canvas, elementRectOnCanvas) {
  if (!node || !element || !elementRectOnCanvas) {
    return null;
  }

  const nodeRect = mapDomRectToCanvas(node.getBoundingClientRect(), boardRect, canvas);
  return {
    x: nodeRect.x - elementRectOnCanvas.x - (elementRectOnCanvas.width / 2),
    y: nodeRect.y - elementRectOnCanvas.y - (elementRectOnCanvas.height / 2),
    width: nodeRect.width,
    height: nodeRect.height,
  };
}

function drawReportHeaderTextOverlay(context, boardRect, canvas, format = getCurrentExportFormat()) {
  if (!isPdfExportFormat(format)) {
    return;
  }

  const titleElement = getElementByLayerId("title-base");
  if (!titleElement) {
    return;
  }

  const titleNode = titleElement.querySelector("h2");
  const subtitleNode = titleElement.querySelector("#boardSubtitle, .board-title-banner__text p");
  const textContainerNode = titleElement.querySelector(".board-title-banner__text");
  const titleText = titleNode?.textContent?.trim() || "";
  const subtitleText = subtitleNode?.textContent?.trim() || "";

  if (!titleNode || !textContainerNode || !titleText) {
    return;
  }

  const textContainerRect = mapDomRectToCanvas(textContainerNode.getBoundingClientRect(), boardRect, canvas);
  if (!textContainerRect.width || !textContainerRect.height) {
    return;
  }

  const elementStyles = window.getComputedStyle(titleElement);
  const backgroundColor = elementStyles.backgroundColor || "#ffffff";
  const gap = Math.max(2, textContainerRect.height * 0.04);
  const hasSubtitle = Boolean(subtitleText);
  const titleHeightRatio = hasSubtitle ? 0.64 : 1;
  const titleRect = {
    x: textContainerRect.x,
    y: textContainerRect.y,
    width: textContainerRect.width,
    height: hasSubtitle
      ? Math.max(8, (textContainerRect.height * titleHeightRatio) - gap)
      : textContainerRect.height,
  };
  const subtitleRect = hasSubtitle
    ? {
        x: textContainerRect.x,
        y: titleRect.y + titleRect.height + gap,
        width: textContainerRect.width,
        height: Math.max(8, textContainerRect.height - titleRect.height - gap),
      }
    : null;

  context.save();
  context.fillStyle = backgroundColor;
  context.fillRect(textContainerRect.x, textContainerRect.y, textContainerRect.width, textContainerRect.height);
  context.restore();

  drawFittedTextNodeInRect(context, titleNode, titleText, titleRect, boardRect, canvas, {
    paddingX: Math.max(4, textContainerRect.width * 0.02),
    paddingY: 0,
    textAlign: "center",
    verticalAlign: "middle",
    minFontSize: 10,
  });

  if (subtitleRect && subtitleNode && subtitleText) {
    drawFittedTextNodeInRect(context, subtitleNode, subtitleText, subtitleRect, boardRect, canvas, {
      paddingX: Math.max(4, textContainerRect.width * 0.02),
      paddingY: 0,
      textAlign: "center",
      verticalAlign: "middle",
      minFontSize: 7,
    });
  }
}

async function resolveLegendImageSource(symbolNode) {
  if (!symbolNode) {
    return null;
  }

  if (symbolNode.tagName === "IMG" && symbolNode.src) {
    return symbolNode.src;
  }

  const nestedImage = symbolNode.querySelector("img");
  if (nestedImage && nestedImage.src) {
    return nestedImage.src;
  }

  return null;
}

async function drawLegendSymbolFromNode(context, symbolNode, rect) {
  if (!symbolNode || rect.width <= 0 || rect.height <= 0) {
    return;
  }

  const imageSrc = await resolveLegendImageSource(symbolNode);
  if (imageSrc) {
    try {
      const image = await loadExportImage(imageSrc);
      drawImageContain(context, image, rect.x, rect.y, rect.width, rect.height);
      return;
    } catch (error) {
      // Fallback shape below
    }
  }

  if (symbolNode.classList.contains("carto-legend-symbol--area")) {
    context.fillStyle = "#000091";
    context.beginPath();
    context.moveTo(rect.x + rect.width / 2, rect.y);
    context.lineTo(rect.x, rect.y + rect.height);
    context.lineTo(rect.x + rect.width, rect.y + rect.height);
    context.closePath();
    context.fill();
    return;
  }

  if (symbolNode.classList.contains("carto-legend-symbol--point")) {
    const radius = Math.max(2, Math.min(rect.width, rect.height) / 2);
    context.fillStyle = "#67d59a";
    context.beginPath();
    context.arc(rect.x + rect.width / 2, rect.y + rect.height / 2, radius, 0, Math.PI * 2);
    context.fill();
    return;
  }

  context.fillStyle = "#111827";
  context.fillRect(rect.x, rect.y + (rect.height / 2) - 1, rect.width, 2);
}

async function drawLegendOnCanvas(context, boardRect, canvas) {
  if (!legendPanel) {
    return;
  }

  const panelRect = mapDomRectToCanvas(legendPanel.getBoundingClientRect(), boardRect, canvas);
  const panelStyles = window.getComputedStyle(legendPanel);
  context.fillStyle = panelStyles.backgroundColor || "#ffffff";
  context.fillRect(panelRect.x, panelRect.y, panelRect.width, panelRect.height);

  const legendCard = legendPanel.querySelector(".carto-legend-card");
  if (legendCard) {
    const cardRect = mapDomRectToCanvas(legendCard.getBoundingClientRect(), boardRect, canvas);
    const cardStyles = window.getComputedStyle(legendCard);
    context.fillStyle = cardStyles.backgroundColor || "#ffffff";
    context.fillRect(cardRect.x, cardRect.y, cardRect.width, cardRect.height);
  }

  const sections = [...legendPanel.querySelectorAll(".carto-legend-section")];
  for (const section of sections) {
    const titleRow = section.querySelector(".carto-legend-section__title-row");
    const titleNode = section.querySelector(".carto-legend-section__title");
    const bodyNode = section.querySelector(".carto-legend-section__body");

    if (titleRow) {
      const titleRowRect = mapDomRectToCanvas(titleRow.getBoundingClientRect(), boardRect, canvas);
      const titleRowStyles = window.getComputedStyle(titleRow);
      context.fillStyle = titleRowStyles.backgroundColor || "#000091";
      context.fillRect(titleRowRect.x, titleRowRect.y, titleRowRect.width, titleRowRect.height);
    }

    if (titleNode) {
      const titleRect = mapDomRectToCanvas(titleNode.getBoundingClientRect(), boardRect, canvas);
      drawTextNodeInRect(context, titleNode, titleNode.textContent?.trim() || "", titleRect, boardRect, canvas, {
        paddingX: 2,
        paddingY: 1,
        textAlign: "left",
        verticalAlign: "middle",
      });
    }

    // Intentionally skip legend action buttons (U/D/R) in export output.

    if (bodyNode) {
      const bodyRect = mapDomRectToCanvas(bodyNode.getBoundingClientRect(), boardRect, canvas);
      const bodyStyles = window.getComputedStyle(bodyNode);
      context.fillStyle = bodyStyles.backgroundColor || "#ffffff";
      context.fillRect(bodyRect.x, bodyRect.y, bodyRect.width, bodyRect.height);
    }

  const items = [...section.querySelectorAll(".carto-legend-list li")];
  for (const item of items) {
      const symbolNode = item.querySelector(".carto-legend-symbol, .carto-legend-picto");
      const labelNode = item.querySelector(".carto-legend-label");
      if (symbolNode) {
        const symbolRect = mapDomRectToCanvas(symbolNode.getBoundingClientRect(), boardRect, canvas);
        await drawLegendSymbolFromNode(context, symbolNode, symbolRect);
      }
      if (labelNode) {
        const labelRect = mapDomRectToCanvas(labelNode.getBoundingClientRect(), boardRect, canvas);
        drawTextNodeInRect(context, labelNode, labelNode.textContent?.trim() || "", labelRect, boardRect, canvas);
      }
    }
  }

  if (legendHint && legendHint.offsetParent !== null) {
    const hintRect = mapDomRectToCanvas(legendHint.getBoundingClientRect(), boardRect, canvas);
    drawTextNodeInRect(context, legendHint, legendHint.textContent?.trim() || "", hintRect, boardRect, canvas);
  }

  drawLegendSeparatorOverlay(context, boardRect, canvas);
}

function drawExportTextBorder(context, element, x, y, width, height) {
  if (!element || element.dataset.borderTransparent === "true") {
    return;
  }

  const borderColor = element.dataset.textBorderColor || window.getComputedStyle(element).borderTopColor || "#000091";
  if (!borderColor || borderColor === "transparent" || borderColor === "rgba(0, 0, 0, 0)") {
    return;
  }

  context.save();
  context.strokeStyle = borderColor;
  context.lineWidth = 1;
  context.strokeRect(x + 0.5, y + 0.5, Math.max(0, width - 1), Math.max(0, height - 1));
  context.restore();
}

async function drawElementsOnCanvas(context, boardRect, canvas) {
  const canvasScale = getCanvasScale(boardRect, canvas);
  const fontScale = (canvasScale.x + canvasScale.y) / 2;

  for (const layer of layers) {
    if (!layer.visible || layer.type === "map") {
      continue;
    }

    const element = getElementByLayerId(layer.id);
    if (!element) {
      continue;
    }

    const elementRect = mapDomRectToCanvas(element.getBoundingClientRect(), boardRect, canvas);
    const x = elementRect.x;
    const y = elementRect.y;
    const width = elementRect.width;
    const height = elementRect.height;
    const elementStyles = window.getComputedStyle(element);

    if (layer.type === "picto") {
      if (layer.src) {
        try {
          const image = await loadExportImage(layer.src);
          const badge = element.querySelector(".board-picto-badge");
          if (badge) {
            const badgeRect = mapDomRectToCanvas(badge.getBoundingClientRect(), boardRect, canvas);
            drawImageContain(context, image, badgeRect.x, badgeRect.y, badgeRect.width, badgeRect.height);
          } else {
            drawImageContain(context, image, x, y, width, height);
          }
        } catch (error) {
          context.fillStyle = "#000091";
          context.fillRect(x, y, width, height);
        }
      }
      continue;
    }

    if (layer.type === "shape") {
      const shapeType = element.dataset.shapeType || "rectangle";
      const shapeStyle = getShapeStyleState(layer.id);
      const fillColor = shapeStyle?.fillTransparent ? "transparent" : (shapeStyle?.fillColor || "rgba(0, 0, 145, 0.22)");
      const strokeColor = shapeStyle?.strokeColor || "#000091";
      context.save();
      context.translate(x + width / 2, y + height / 2);
      const rotation = Number(element.dataset.rotation || "0");
      context.rotate((rotation * Math.PI) / 180);
      context.fillStyle = fillColor;
      context.strokeStyle = strokeColor;
      context.lineWidth = 1;

      if (shapeType === "ellipse") {
        context.beginPath();
        context.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        context.fill();
        context.stroke();
      } else if (shapeType === "triangle") {
        context.beginPath();
        context.moveTo(0, -height / 2);
        context.lineTo(-width / 2, height / 2);
        context.lineTo(width / 2, height / 2);
        context.closePath();
        context.fill();
        context.stroke();
      } else if (shapeType === "diamond") {
        context.beginPath();
        context.moveTo(0, -height / 2);
        context.lineTo(width / 2, 0);
        context.lineTo(0, height / 2);
        context.lineTo(-width / 2, 0);
        context.closePath();
        context.fill();
        context.stroke();
      } else if (shapeType === "line") {
        context.fillStyle = fillColor === "transparent" ? strokeColor : fillColor;
        context.fillRect(-width / 2, -1, width, 2);
      } else if (shapeType === "black-bar") {
        context.fillStyle = fillColor === "transparent" ? "#000000" : fillColor;
        context.fillRect(-width / 2, -height / 2, width, height);
      } else if (shapeType === "bubble-left" || shapeType === "bubble-bottom") {
        context.beginPath();
        context.ellipse(0, 0, width / 2, height / 2, 0, 0, Math.PI * 2);
        context.fillStyle = fillColor;
        context.fill();
        context.stroke();
        context.beginPath();
        if (shapeType === "bubble-left") {
          context.moveTo(-width * 0.5, height * 0.1);
          context.lineTo(-width * 0.62, height * 0.28);
          context.lineTo(-width * 0.44, height * 0.26);
        } else {
          context.moveTo(width * 0.02, height * 0.48);
          context.lineTo(width * 0.16, height * 0.66);
          context.lineTo(width * 0.26, height * 0.44);
        }
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();
        context.stroke();
      } else if (shapeType === "callout-rect-left" || shapeType === "callout-rect-right" || shapeType === "notch-top" || shapeType === "notch-bottom") {
        context.fillStyle = fillColor;
        context.fillRect(-width / 2, -height / 2, width, height);
        context.strokeRect(-width / 2, -height / 2, width, height);
        context.beginPath();
        if (shapeType === "callout-rect-left") {
          context.moveTo(-width / 2, height * 0.1);
          context.lineTo(-width * 0.64, height * 0.24);
          context.lineTo(-width / 2, height * 0.32);
        } else if (shapeType === "callout-rect-right") {
          context.moveTo(width / 2, height * 0.1);
          context.lineTo(width * 0.64, height * 0.24);
          context.lineTo(width / 2, height * 0.32);
        } else if (shapeType === "notch-top") {
          context.moveTo(-width * 0.08, -height / 2);
          context.lineTo(0, -height * 0.7);
          context.lineTo(width * 0.08, -height / 2);
        } else {
          context.moveTo(-width * 0.08, height / 2);
          context.lineTo(0, height * 0.7);
          context.lineTo(width * 0.08, height / 2);
        }
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();
        context.stroke();
      } else if (shapeType === "arrow-right") {
        const arrowWidth = width;
        const arrowHeight = height;
        context.fillStyle = "#000091";
        context.beginPath();
        context.moveTo(-arrowWidth / 2, -arrowHeight * 0.15);
        context.lineTo(arrowWidth * 0.2, -arrowHeight * 0.15);
        context.lineTo(arrowWidth * 0.2, -arrowHeight * 0.35);
        context.lineTo(arrowWidth / 2, 0);
        context.lineTo(arrowWidth * 0.2, arrowHeight * 0.35);
        context.lineTo(arrowWidth * 0.2, arrowHeight * 0.15);
        context.lineTo(-arrowWidth / 2, arrowHeight * 0.15);
        context.closePath();
        context.fill();
      } else {
        context.fillRect(-width / 2, -height / 2, width, height);
        context.strokeRect(-width / 2, -height / 2, width, height);
      }
      context.restore();
      continue;
    }

    if (layer.type === "north") {
      context.fillStyle = "#000091";
      context.font = "700 34px sans-serif";
      context.textAlign = "center";
      context.fillText(element.textContent.trim() || "N", x + width / 2, y + 28);
      context.beginPath();
      context.moveTo(x + width / 2, y + height - 6);
      context.lineTo(x + width / 2 - 18, y + height - 42);
      context.lineTo(x + width / 2 + 18, y + height - 42);
      context.closePath();
      context.fill();
      continue;
    }

    if (layer.type === "title") {
      const titleNode = element.querySelector("h2");
      const subtitleNode = element.querySelector("#boardSubtitle, .board-title-banner__text p");
      const leftLogoNode = element.querySelector(".board-title-banner__logo--left img");
      const rightLogoNode = element.querySelector(".board-title-banner__logo--right img");
      const isReportHeader = isPdfExportFormat();
      const backgroundColor = element.dataset.bgTransparent === "true" ? "transparent" : elementStyles.backgroundColor;
      const rotation = Number(element.dataset.rotation || "0");

      context.save();
      context.translate(x + width / 2, y + height / 2);
      context.rotate((rotation * Math.PI) / 180);
      if (backgroundColor !== "transparent" && backgroundColor !== "rgba(0, 0, 0, 0)") {
        context.fillStyle = backgroundColor;
        context.fillRect(-width / 2, -height / 2, width, height);
      }
      drawExportTextBorder(context, element, -width / 2, -height / 2, width, height);

      const titleRect = mapNodeRectInsideElementToCanvas(titleNode, element, boardRect, canvas, elementRect);
      drawTextNodeInRect(
        context,
        titleNode,
        titleNode.textContent.trim(),
        titleRect || { x: -width / 2 + 14, y: -height / 2 + 6, width: Math.max(8, width - 28), height: Math.max(8, height - 12) },
        boardRect,
        canvas,
        {
          paddingX: 0,
          paddingY: 0,
          textAlign: isReportHeader ? "center" : "left",
          verticalAlign: isReportHeader ? "middle" : "top",
        },
      );

      if (subtitleNode) {
        const subtitleRect = mapNodeRectInsideElementToCanvas(subtitleNode, element, boardRect, canvas, elementRect);
        drawTextNodeInRect(
          context,
          subtitleNode,
          subtitleNode.textContent.trim(),
          subtitleRect || { x: -width / 2 + 14, y: -height / 2 + 28, width: Math.max(8, width - 28), height: Math.max(8, height - 34) },
          boardRect,
          canvas,
          {
            paddingX: 0,
            paddingY: 0,
            textAlign: isReportHeader ? "center" : "left",
            verticalAlign: "middle",
          },
        );
      }

      for (const logoNode of [leftLogoNode, rightLogoNode]) {
        if (!logoNode?.src) {
          continue;
        }
        try {
          const logoImage = await loadExportImage(logoNode.src);
          const logoRect = mapNodeRectInsideElementToCanvas(logoNode, element, boardRect, canvas, elementRect);
          if (logoRect) {
            drawImageContain(context, logoImage, logoRect.x, logoRect.y, logoRect.width, logoRect.height);
          }
        } catch (error) {
          // Ignore logo load issues and keep the export running.
        }
      }
      context.restore();
      continue;
    }

    if (layer.type === "source") {
      const sourceNode = getSourceTextNode(element);
      const sourceStyles = sourceNode ? window.getComputedStyle(sourceNode) : null;
      const backgroundColor = element.dataset.bgTransparent === "true" ? "transparent" : elementStyles.backgroundColor;
      const rotation = Number(element.dataset.rotation || "180");

      context.save();
      context.translate(x + width / 2, y + height / 2);
      // Source text is vertical in UI (writing-mode: vertical-rl) with an extra element rotation.
      // Approximate this in canvas by rotating a continuous text line.
      context.rotate(((rotation - 90) * Math.PI) / 180);

      if (backgroundColor !== "transparent" && backgroundColor !== "rgba(0, 0, 0, 0)") {
        context.fillStyle = backgroundColor;
        context.fillRect(-width / 2, -height / 2, width, height);
      }
      drawExportTextBorder(context, element, -width / 2, -height / 2, width, height);

      const fontSizePx = sourceStyles
        ? Math.max(8, Math.round((parseFloat(sourceStyles.fontSize) || 12) * fontScale))
        : 14;
      context.fillStyle = sourceStyles ? sourceStyles.color : "#5c5c5c";
      context.font = sourceStyles
        ? `${sourceStyles.fontStyle} ${sourceStyles.fontWeight} ${fontSizePx}px ${sourceStyles.fontFamily}`
        : "400 14px sans-serif";
      context.textAlign = "left";
      context.textBaseline = "middle";

      const text = sourceNode ? sourceNode.textContent.trim() : "";
      const measuredWidth = context.measureText(text).width;
      const textStartX = -measuredWidth / 2;

      context.beginPath();
      context.rect(-width / 2, -height / 2, width, height);
      context.clip();
      context.fillText(text, textStartX, 0);
      context.restore();
      continue;
    }

    if (layer.type === "text") {
      const textNode = element.querySelector("p");
      const backgroundColor = element.dataset.bgTransparent === "true" ? "transparent" : elementStyles.backgroundColor;
      const rotation = Number(element.dataset.rotation || "0");

      context.save();
      context.translate(x + width / 2, y + height / 2);
      context.rotate((rotation * Math.PI) / 180);

      if (backgroundColor !== "transparent" && backgroundColor !== "rgba(0, 0, 0, 0)") {
        context.fillStyle = backgroundColor;
        context.fillRect(-width / 2, -height / 2, width, height);
      }
      drawExportTextBorder(context, element, -width / 2, -height / 2, width, height);

      const freeTextRect = textNode
        ? mapNodeRectInsideElementToCanvas(textNode, element, boardRect, canvas, elementRect)
        : null;
      drawTextNodeInRect(
        context,
        textNode || element,
        textNode ? textNode.textContent.trim() : "",
        freeTextRect || { x: -width / 2 + 8, y: -height / 2 + 8, width: Math.max(8, width - 16), height: Math.max(8, height - 16) },
        boardRect,
        canvas,
        {
          paddingX: 0,
          paddingY: 0,
          textAlign: "left",
          verticalAlign: "top",
        },
      );
      context.restore();
      continue;
    }

    context.fillStyle = "#ffffff";
    context.fillRect(x, y, width, height);
    context.strokeStyle = "rgba(0,0,145,0.22)";
    context.lineWidth = 2;
    context.strokeRect(x, y, width, height);
    context.fillStyle = "#3a3a3a";
    context.font = "400 18px sans-serif";
    const sourceNode = getSourceTextNode(element);
    drawWrappedText(context, sourceNode ? sourceNode.textContent.trim() : "", x + 16, y + 44, width - 32, 22);
  }
}

mapUpload.addEventListener("change", async (event) => {
  const files = [...(event.target.files || [])];
  if (!files.length) {
    return;
  }

  const importedLayerIds = [];
  const failedFiles = [];
  let historyCaptured = false;

  try {
    for (const file of files) {
      try {
        const dataUrl = await readFileAsDataUrl(file);
        await waitForImageLoad(new Image(), dataUrl);
        const mapLabel = getLayerDisplayNameFromFile(file.name);
        const mapBaseLayer = getLayer("map-base");
        const canReuseBaseMap = Boolean(
          mapBaseLayer &&
          (!getMapLayerSource(mapBaseLayer) || !mapBaseLayer.listed)
        );

        if (!historyCaptured) {
          pushHistory();
          historyCaptured = true;
        }

        if (canReuseBaseMap && mapBaseLayer) {
          setMapLayerSource("map-base", dataUrl);
          mapBaseLayer.label = mapLabel;
          mapBaseLayer.visible = true;
          mapBaseLayer.listed = true;
          mapLayer.classList.remove("is-hidden");
          mapLayer.style.visibility = "visible";
          resetMapLayerFrame();
          importedLayerIds.push("map-base");
        } else {
          const newLayerId = createAdditionalMapLayer(dataUrl, mapLabel);
          importedLayerIds.push(newLayerId);
        }
      } catch (error) {
        failedFiles.push(file.name);
      }
    }

    if (!importedLayerIds.length) {
      throw new Error("map-import-failed");
    }

    resetMapLayerFrame();
    syncMapPlaceholderState();
    applyLayerOrder();
    renderLayers();
    selectLayer(importedLayerIds[importedLayerIds.length - 1]);

    if (failedFiles.length) {
      updateStatusMessage(`${importedLayerIds.length} carte(s) chargee(s), ${failedFiles.length} fichier(s) en echec.`, true);
    } else if (importedLayerIds.length === 1) {
      updateStatusMessage(`Image chargee : ${files[0].name}`);
    } else {
      updateStatusMessage(`${importedLayerIds.length} cartes chargees.`);
    }

    markDocumentModified();
  } catch (error) {
    updateStatusMessage("Le fichier n'a pas pu etre charge comme carte.", true);
  } finally {
    mapUpload.value = "";
  }
});

mapUpload.addEventListener("click", () => {
  mapUpload.value = "";
});

customPictoUpload.addEventListener("change", async (event) => {
  if (!event.target.files.length) {
    return;
  }
  await importCustomPictos(event.target.files);
  customPictoUpload.value = "";
});

titleInput.addEventListener("input", () => withHistoryAction(syncBaseTexts));
subtitleInput.addEventListener("input", () => withHistoryAction(syncBaseTexts));
sourceInput.addEventListener("input", () => withHistoryAction(syncBaseTexts));
northLabelInput.addEventListener("input", () => withHistoryAction(syncBaseTexts));
titleInput.addEventListener("change", markDocumentModified);
subtitleInput.addEventListener("change", markDocumentModified);
sourceInput.addEventListener("change", markDocumentModified);
northLabelInput.addEventListener("change", markDocumentModified);

selectedText.addEventListener("input", (event) => {
  updateSelectedText(event.target.value);
});

legendSelectedText?.addEventListener("input", (event) => {
  if (!legendSelection) {
    return;
  }
  updateLegendSelectionText(event.target.value);
});

function bindContinuousControl(control, onLiveChange, onCommitChange = null) {
  if (!control) {
    return;
  }

  let actionCaptured = false;
  const captureActionStart = () => {
    if (actionCaptured) {
      return;
    }
    pushHistory();
    actionCaptured = true;
  };

  control.addEventListener("pointerdown", captureActionStart);
  control.addEventListener("keydown", captureActionStart);
  control.addEventListener("input", (event) => {
    if (!actionCaptured) {
      captureActionStart();
    }
    runWithoutHistory(() => onLiveChange(event));
  });
  control.addEventListener("change", (event) => {
    if (actionCaptured) {
      runWithoutHistory(() => onLiveChange(event));
    }
    if (onCommitChange) {
      runWithoutHistory(() => onCommitChange(event));
    }
    actionCaptured = false;
    if (historyStack.length) {
      markDocumentModified();
      updateHistoryButtons();
    }
  });
  control.addEventListener("blur", () => {
    actionCaptured = false;
  });
}

bindContinuousControl(selectedFontSize, (event) => {
  updateSelectedTextStyle({ fontSize: Number(event.target.value) });
});

bindContinuousControl(selectedTextColor, (event) => {
  updateSelectedTextStyle({ textColor: event.target.value });
});

bindContinuousControl(selectedTextBackground, (event) => {
  updateSelectedTextStyle({
    backgroundColor: event.target.value,
    bgTransparent: false,
  });
});

bindContinuousControl(selectedTextBorderColor, (event) => {
  updateSelectedTextStyle({
    borderColor: event.target.value,
    borderTransparent: false,
  });
});

bindContinuousControl(selectedFontFamily, (event) => {
  updateSelectedTextStyle({ fontFamily: event.target.value });
});

bindContinuousControl(legendSelectedFontSize, (event) => {
  if (!legendSelection) {
    return;
  }
  updateSelectedTextStyle({ fontSize: Number(event.target.value) });
});

bindContinuousControl(legendSelectedTextColor, (event) => {
  if (!legendSelection) {
    return;
  }
  updateSelectedTextStyle({ textColor: event.target.value });
});

bindContinuousControl(legendSelectedTextBackground, (event) => {
  if (!legendSelection) {
    return;
  }
  updateSelectedTextStyle({
    backgroundColor: event.target.value,
    bgTransparent: false,
  });
});

bindContinuousControl(legendSelectedFontFamily, (event) => {
  if (!legendSelection) {
    return;
  }
  updateSelectedTextStyle({ fontFamily: event.target.value });
});

toggleBoldButton.addEventListener("click", () => {
  const styleState = legendSelection ? getLegendSelectionStyleState() : getTextStyleState(selectedLayerId);
  if (!styleState) {
    return;
  }
  updateSelectedTextStyle({ fontWeight: Number(styleState.fontWeight) >= 600 ? "400" : "700" });
});

toggleItalicButton.addEventListener("click", () => {
  const styleState = legendSelection ? getLegendSelectionStyleState() : getTextStyleState(selectedLayerId);
  if (!styleState) {
    return;
  }
  updateSelectedTextStyle({ fontStyle: styleState.fontStyle === "italic" ? "normal" : "italic" });
});

toggleTransparentBackgroundButton.addEventListener("click", () => {
  if (legendSelection) {
    const legendStyle = getLegendSelectionStyleState();
    if (!legendStyle) {
      return;
    }
    updateSelectedTextStyle({ bgTransparent: !legendStyle.bgTransparent });
    return;
  }

  const shapeState = getShapeStyleState(selectedLayerId);
  if (shapeState) {
    updateSelectedTextStyle({ bgTransparent: !shapeState.fillTransparent });
    return;
  }

  const textStyle = getTextStyleState(selectedLayerId);
  if (!textStyle) {
    return;
  }
  updateSelectedTextStyle({ bgTransparent: !textStyle.bgTransparent });
});

toggleTransparentBorderButton.addEventListener("click", () => {
  const targetLayers = getTextStyleTargetLayers();
  const textStyle = targetLayers.length ? getTextStyleState(targetLayers[0].id) : null;
  if (!textStyle) {
    return;
  }
  updateSelectedTextStyle({ borderTransparent: !textStyle.borderTransparent });
});

legendToggleBoldButton?.addEventListener("click", () => {
  if (!legendSelection) {
    return;
  }
  const styleState = getLegendSelectionStyleState();
  if (!styleState) {
    return;
  }
  updateSelectedTextStyle({ fontWeight: Number(styleState.fontWeight) >= 600 ? "400" : "700" });
});

legendToggleItalicButton?.addEventListener("click", () => {
  if (!legendSelection) {
    return;
  }
  const styleState = getLegendSelectionStyleState();
  if (!styleState) {
    return;
  }
  updateSelectedTextStyle({ fontStyle: styleState.fontStyle === "italic" ? "normal" : "italic" });
});

legendToggleTransparentBackgroundButton?.addEventListener("click", () => {
  if (!legendSelection) {
    return;
  }
  const styleState = getLegendSelectionStyleState();
  if (!styleState) {
    return;
  }
  updateSelectedTextStyle({ bgTransparent: !styleState.bgTransparent });
});

bindContinuousControl(selectedWidth, (event) => {
  updateSelectedWidth(event.target.value);
});

bindContinuousControl(selectedHeight, (event) => {
  updateSelectedHeight(event.target.value);
});

bindContinuousControl(selectedPictoSize, (event) => {
  updateSelectedPictoSize(event.target.value);
});

bindContinuousControl(selectedRotation, (event) => {
  updateSelectedRotation(event.target.value);
});

bindContinuousControl(legendColumns, (event) => {
  updateLegendLayoutStyle({ columns: event.target.value });
});

bindContinuousControl(legendSymbolSize, (event) => {
  updateLegendLayoutStyle({ symbolSize: event.target.value });
});

bringForwardButton.addEventListener("click", () => moveLayer(selectedLayerId, 1));
sendBackwardButton.addEventListener("click", () => moveLayer(selectedLayerId, -1));
deleteLayerButton.addEventListener("click", removeSelectedLayer);
exportImageButton.addEventListener("click", () => {
  exportBoardAsImage(getCurrentExportFormat());
});
resetWorkspaceButton.addEventListener("click", (event) => {
  event.preventDefault();
  const confirmed = window.confirm(
    "Confirmer la reinitialisation ? Cette action supprimera la mise en page en cours."
  );
  if (!confirmed) {
    updateStatusMessage("Reinitialisation annulee.");
    return;
  }
  resetWorkspace();
});
saveProjectButton?.addEventListener("click", saveProjectToFile);
importProjectButton?.addEventListener("click", () => {
  projectUpload?.click();
});
projectUpload?.addEventListener("change", async (event) => {
  const [file] = [...(event.target.files || [])];
  if (!file) {
    return;
  }

  try {
    await importProjectFromFile(file);
  } catch (error) {
    updateStatusMessage("Le projet n'a pas pu etre importe. Verifiez le fichier JSON.", true);
  } finally {
    projectUpload.value = "";
  }
});
toolbarUndoButton?.addEventListener("click", undoLastAction);
toolbarRedoButton?.addEventListener("click", redoLastAction);
toolbarCopyButton?.addEventListener("click", () => {
  const payload = copyCurrentSelection();
  if (!payload) {
    updateStatusMessage("Selectionnez un element copiable (titre, texte, picto ou forme).", true);
    return;
  }
  updateStatusMessage(`Element copie : ${payload.label || "element"}.`);
});
toolbarPasteButton?.addEventListener("click", () => {
  const pasted = pasteCopiedLayer();
  if (!pasted) {
    updateStatusMessage("Aucun element copie a coller.", true);
  }
});
toolbarDeleteButton?.addEventListener("click", () => {
  const canDeleteSubtitle = isSubtitleSelectionActive();
  const hasDeletableSelection = !legendSelection && getSelectedLayers().some((layer) => canDeleteLayer(layer));
  if (!canDeleteSubtitle && !hasDeletableSelection) {
    updateStatusMessage("Astuce tactile : selectionnez d'abord un element sur la carte, puis touchez Suppr.", true);
    return;
  }
  removeSelectedLayer();
});

zoomInButton.addEventListener("click", () => {
  zoomLevel = Math.min(ZOOM_MAX, zoomLevel + ZOOM_STEP);
  updateZoom();
});

zoomOutButton.addEventListener("click", () => {
  zoomLevel = Math.max(ZOOM_MIN, zoomLevel - ZOOM_STEP);
  updateZoom();
});

zoomResetButton?.addEventListener("click", () => {
  zoomLevel = ZOOM_BASELINE;
  boardPanX = 0;
  boardPanY = 0;
  updateZoom();
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cloneBaseLayer(button.dataset.add);
  });
});

shapeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    createShapeElement(button.dataset.shape);
  });
});

document.addEventListener("pointermove", (event) => {
  if (updateLegendResize(event)) {
    return;
  }
  if (updateTouchViewportGesture(event)) {
    return;
  }
  if (interaction) {
    updateInteraction(event);
    return;
  }
  if (updatePanInteraction(event)) {
    return;
  }
  updateInteraction(event);
});

document.addEventListener("mousemove", (event) => {
  if (interaction) {
    updateInteraction(event);
  }
});

document.addEventListener("touchmove", (event) => {
  if (!interaction) {
    return;
  }
  const touchEvent = createTouchInteractionEvent(event);
  if (touchEvent) {
    updateInteraction(touchEvent);
    event.preventDefault();
  }
}, { passive: false });

document.addEventListener("pointerup", (event) => {
  endTouchViewportPointer(event);
  endLegendResize(event);
  endPanInteraction(event);
  endInteraction();
});

document.addEventListener("mouseup", () => {
  endInteraction();
});

document.addEventListener("touchend", () => {
  endInteraction();
});

document.addEventListener("touchcancel", () => {
  endInteraction();
});

document.addEventListener("pointercancel", (event) => {
  endTouchViewportPointer(event);
  endLegendResize(event);
  endPanInteraction(event);
  endInteraction();
});

legendResizer?.addEventListener("pointerdown", startLegendResize);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && displaySettings && !displaySettings.hidden) {
    closeDisplaySettings();
    return;
  }

  if (event.key === "Escape" && fullscreenHost?.classList.contains("is-fallback-fullscreen")) {
    exitWorkspaceFullscreen();
    event.preventDefault();
    return;
  }

  const target = event.target;
  const isTypingContext = target instanceof HTMLElement && (
    target.tagName === "INPUT" ||
    target.tagName === "TEXTAREA" ||
    target.isContentEditable
  );

  if (isTypingContext) {
    return;
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "c") {
    const payload = copyCurrentSelection();
    if (!payload) {
      return;
    }
    event.preventDefault();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "v") {
    if (!copiedLayerPayload) {
      return;
    }

    pasteCopiedLayer();
    event.preventDefault();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z") {
    if (event.repeat) {
      event.preventDefault();
      return;
    }
    if (event.shiftKey) {
      redoLastAction();
      event.preventDefault();
      return;
    }
    undoLastAction();
    event.preventDefault();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "y") {
    if (event.repeat) {
      event.preventDefault();
      return;
    }
    redoLastAction();
    event.preventDefault();
  }

  if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "a") {
    selectAllLayers();
    event.preventDefault();
  }

  if (event.key === "Delete" || event.key === "Backspace") {
    const selectedLayers = getSelectedLayers();
    const hasDeletableSelection = selectedLayers.some((layer) => canDeleteLayer(layer));
    if (!isSubtitleSelectionActive() && !hasDeletableSelection) {
      return;
    }

    removeSelectedLayer();
    event.preventDefault();
  }
});

board.querySelectorAll(".board-element").forEach((element) => attachElementEvents(element));
attachElementEvents(mapLayer);
ensureReportHeaderLogoBaseLayers();
resetMapLayerFrame();
initializeTextStyleState("title-base");
initializeTextStyleState("source-base");
initializeToolboxMenu();
initializePictoSearch();
initializeMapManagementMenu();
initializeSideMenu();
initializeLeftMenu();
initializeLeftPanelToggle();
initializeRightPanelToggle();
initializeWorkspaceFullscreenToggle();
initializeTouchKeyboard();
initializeMouseViewportControls();
initializeDisplaySettings();
initializeExportFormatControls();
initializeStartupWizard();
initializeLegendToolbar();
refreshDocumentMeta();
updateHistoryButtons();
updateClipboardButtons();
updateQuickDeleteButton();
window.addEventListener("resize", scheduleMapLayerFrameSync);

if (typeof ResizeObserver !== "undefined") {
  const boardResizeObserver = new ResizeObserver(() => {
    scheduleMapLayerFrameSync();
  });
  boardResizeObserver.observe(board);
  if (legendPanel) {
    boardResizeObserver.observe(legendPanel);
  }
}

board.addEventListener("click", (event) => {
  if (event.target === board || event.target === boardGrid) {
    clearSelection();
  }
});


async function initializeApp() {
  await loadLocalMapSources();
  renderReadyMapLibrary();
  renderBoardTemplateLibrary();
  await loadLocalPictos();
  renderPictoLibrary();
  renderFavoritePictos();
  applyLayerOrder();
  renderLayers();
  syncBaseTexts();
  refreshExportFormatUi();
  updateZoom();
  openStartupWizard(1);
}

initializeApp();
scheduleMapLayerFrameSync();

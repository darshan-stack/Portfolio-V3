/**
 * Cat Follower Configuration
 * 
 * This enables a physics-based cat that follows your cursor across the page.
 * 
 * Features:
 * - Spring physics for smooth, weighty movement (Stiffness: 150, Damping: 20)
 * - State-based animations: idle (breathing), walking, sitting (when idle 2s+)
 * - Directional flipping based on cursor movement
 * - "Perching" on interactive elements
 * 
 * To make elements "perchable" (cat sits on top):
 * Add `data-perch` attribute to any element:
 * 
 * Example:
 * <div data-perch className="...">Card Content</div>
 * 
 * The cat will automatically detect hover and position itself on top of the element.
 */
export const catConfig = {
  enabled: true, // Set to false to disable the cat
};

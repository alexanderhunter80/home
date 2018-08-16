import { Component, OnInit } from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser'


@Component({
  selector: 'app-codesamples',
  templateUrl: './codesamples.component.html',
  styleUrls: ['./codesamples.component.css']
})
export class CodeSamplesComponent implements OnInit {

  codeArray: String;
  codeSLL: String;
  codeDLL: String;
  codeHashChain: String;
  codeHashLinear: String;
  codeHashPeriodic: String;
  codeHashQuadratic: String;
  codeHasher: String;
  codeHeap: String;
  codeTrie: String;
  codeBST: String;
  codeAVL: String;
  codeRedBlack: String;

  constructor() {

    this.codeArray = `public class ControlArray {

  // attributes
  
  private Object[] array;
  private int next;
  
  // constructors
  
  public ControlArray(int size) {
    array = new Object[size];
    next = 0;
  }
  
  // get & set
  
  public Object[] getArray() {
    return array;
  }
  
  public Object get(int idx) {
    return array[idx];
  }
  
  public int size() {
    return next;
  }
  
  public void add(Object o) throws ArrayIndexOutOfBoundsException {
    if(next > array.length || next < 0) {
      throw new ArrayIndexOutOfBoundsException();
    }
    array[next++] = o;
  }
  
  public boolean contains(Object o) {
    for(Object k : array) {
      if(o.equals(k)) {
        return true;
      }
    }
    return false;
  }
  
  public int indexOf(Object o) {
    for(int i = 0; i < array.length; i++) {
      if(o.equals(array[i])) {
        return i;
      }
    }
    return -1;
  }
  
  public void remove(int idx) {
    int i;
    for(i = idx; i < (next-1); i++) {
      array[i] = array[i+1];
    }
    array[i] = null;
    next--;
  }
  
  public boolean findAndRemove(Object o) {
    int at = indexOf(o);
    if(at>=0) {
      remove(at);
      return true;
    } else {
      return false;
    }
  }

}

    `;  // end Array

    this.codeSLL = `public class ControlSinglyLinkedList {

  // attributes

  private ControlSLNode head;
  private int size;

  // constructors

  public ControlSinglyLinkedList() {
    head = null;
    size = 0;
  }

  // get & set

  public ControlSLNode getHead() {
    return head;
  }

  public int size() {
    return size;
  }

  // other methods

  public void add(Object o) {
    if(head == null) {
      head = new ControlSLNode(o);
      size++;
    } else {
      ControlSLNode current = head;
      while(current.getNext() != null) {
        current = current.getNext();
      }
      current.setNext(new ControlSLNode(o));
      size++;
    }
  }

  public Object get(int idx) throws IndexOutOfBoundsException {
    if(idx >= size || idx < 0) {
      throw new IndexOutOfBoundsException();
    }
    if(idx == 0) {
      return head.getValue();
    }
    ControlSLNode current = head;
    for(int i = 0; i < idx; i++) {
      current = current.getNext();
    }
    return current.getValue();
  }

  public ControlSLNode getNode(int idx) throws IndexOutOfBoundsException {
    if(idx >= size || idx < 0) {
      throw new IndexOutOfBoundsException();
    }
    if(idx == 0) {
      return head;
    }
    ControlSLNode current = head;
    for(int i = 0; i < idx; i++) {
      current = current.getNext();
    }
    return current;
  }

  public boolean contains(Object o) {
    if(head == null) {
      return false;
    }
    if(head.getValue().equals(o)) {
      return true;
    }
    ControlSLNode current = head;
    while(current.getNext() != null) {
      current = current.getNext();
      if(current.getValue().equals(o)) {
        return true;
      }
    }
    return false;
  }

  public int indexOf(Object o) {
    if(head == null) {
      return -1;
    }
    ControlSLNode current = head;
    for(int i=0; i < size; i++) {
      if(current.getValue().equals(o)) {
        return i;
      }
      current = current.getNext();
    }
    return -1;
  }
  
  public void remove(int idx) throws IndexOutOfBoundsException {
    if(idx >= size || idx < 0) {
      throw new IndexOutOfBoundsException();
    }
    if(idx == 0) {
      head = head.getNext();
    } else {
      ControlSLNode current = head;
      for(int i = 0; i < idx-1; i++) {
        current = current.getNext();
      }
      current.setNext(current.getNext().getNext());
    }
    size--;
  }
  
  public boolean findAndRemove(Object o) {
    int at = indexOf(o);
    if(at >= 0) {
      remove(at);
      return true;
    } else {
      return false;
    }
  }

}

public class ControlSLNode {
	
  // attributes

  private Object value;
  private ControlSLNode next;

  // constructors

  public ControlSLNode(Object value) {
    this.value = value;
    this.next = null;
  }

  // get & set

  public Object getValue() {
    return value;
  }

  public void setValue(Object value) {
    this.value = value;
  }

  public ControlSLNode getNext() {
    return next;
  }

  public void setNext(ControlSLNode next) {
    this.next = next;
  }

}
    `;  // end SLL

    this.codeDLL = `public class DoublyLinkedList {

  private DLNode head;
  private DLNode tail;
  private int size;

  public DoublyLinkedList() {
    head = null;
    tail = null;
    size = 0;
  }

  public DLNode getHead() {
    return head;
  }

  public void setHead(DLNode head) {
    this.head = head;
  }

  public DLNode getTail() {
    return tail;
  }

  public void setTail(DLNode tail) {
    this.tail = tail;
  }

  public int size() {
    return size;
  }

  //add()
  public void add(Object o) {
    if(head==null) {
      head = new DLNode(o);
      tail = head;
    } else {
      tail.setNext(new DLNode(o));
      tail.getNext().setPrev(tail);
      tail = tail.getNext();
    }
    size++;
    return;
  }

  //get() by index
  public Object get(int idx) throws IndexOutOfBoundsException {
    if(idx >= size || idx < 0) {
      throw new IndexOutOfBoundsException();
    }
    if(idx == 0) {
      return head.getValue();
    }
    if(idx==size) {
      return tail.getValue();
    }
    DLNode current;
    if(idx < size/2) {
      // target in first half of list, traverse from head
      current = head;
      for(int i=0; i<idx; i++) {
        current = current.getNext();
      }
    } else {
      // target in second half of list, traverse from tail
      current = tail;
      for(int i=size-1; i>idx; i--) {
        current = current.getPrev();
      }
    }
    return current.getValue();
  }

  //contains()
  public boolean contains(Object o) {
    // fast fails
    if(head == null) {
      return false;
    }
    if(head.getValue().equals(o) || tail.getValue().equals(o)) {
      return true;
    }
    // traverse
    DLNode current = head;
    while(current.getNext() != null) {
      current = current.getNext();
      if(current.getValue().equals(o)) {
        return true;
      }
    }
    return false;
  }

  //indexOf()

  //remove() by index
  public void remove(int idx) {
    if(idx >= size || idx < 0) {
      throw new IndexOutOfBoundsException();
    }
    DLNode current;
    if(size == 1) {
      head = null;
      tail = null;
      size--;
      return;
    }
    if(idx == 0) {
      head = head.getNext();
      head.setPrev(null);
      size--;
      return;
    } else if(idx == size-1) {
      tail = tail.getPrev();
      tail.setNext(null);
      size--;
      return;
    } else if(idx < size/2) {
      // target in first half of list, traverse from head
      current = head;
      for(int i=0; i<idx; i++) {
        current = current.getNext();
      }
    } else {
      // target in second half of list, traverse from tail
      current = tail;
      for(int i=size-1; i>idx; i--) {
        current = current.getPrev();
      }
    }
    current.getPrev().setNext(current.getNext());
    current.getNext().setPrev(current.getPrev());
    size--;
    return;
  }

}

public class DLNode {
	
  private Object value;
  private DLNode next;
  private DLNode prev;

  public DLNode(Object val) {
    value = val;
    next = null;
    prev = null;
  }

  public Object getValue() {
    return value;
  }

  public void setValue(Object value) {
    this.value = value;
  }

  public DLNode getNext() {
    return next;
  }

  public void setNext(DLNode next) {
    this.next = next;
  }

  public DLNode getPrev() {
    return prev;
  }

  public void setPrev(DLNode prev) {
    this.prev = prev;
  }

}    
    `;  // end DLL

    this.codeHashChain = `import java.util.LinkedList;

public class ChainingHashtable {
  
  private int size;
  private CHashNode[] table;
  private int load;
  private double threshold;
  public int chains;
  
  public ChainingHashtable(int size, double threshold) {
    this.size = size;
    table = new CHashNode[size];
    load = 0;
    chains = 0;
    this.threshold = threshold;
  }
  
  // for testing purposes only
  public CHashNode[] getEntireTable() {
    return table;
  }
  
  // for testing purposes only
  public int getSize() {
    return size;
  }
  
  // for testing purposes only
  public int getLoad() {
    return load;
  }
  
  private void resize() {
    // resize should callout when it is called, just to see how often it happens
    System.out.println("ChainingHashtable is resizing from "+size+" to "+(size*2));

    size *= 2;
    CHashNode[] oldTable = table;
    table = new CHashNode[size];
    for(CHashNode o : oldTable) {
      if(o != null) {
        if(!o.hasList) {
          doAdd(o.key, o.value);
        } else if (o.hasList) {
          for(CHashNode node : o.list) {
            doAdd(node.key, node.value);
          }
        }
      }
    }
  }
  
  public void add(String k, Object v) {
    doAdd(k, v);
    load++;
  }
  
  public void doAdd(String k, Object v) {
    // test load threshold, possibly resize
    double lf = (double) load / size;
    if(lf > threshold) {
      resize();
    }
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // if that position is null, add k,v pair
    if(table[at] == null) {
      table[at] = new CHashNode(k,v);
      return;
    } else if(table[at].hasList) {
      table[at].list.add(new CHashNode(k,v));
      return;
    } else if(!table[at].hasList){
      chains++;
      CHashNode temp = table[at];
      table[at] = new CHashNode(null, null);
      table[at].list = new LinkedList<CHashNode>();
      table[at].hasList = true;
      table[at].list.add(temp);
      table[at].list.add(new CHashNode(k,v));
      return;
    }
    
    // if we have gotten here, then we are past the end of the table and have failed to add the value, necessitating a resize() call
    System.out.println("Hit end of table!");
    resize();
    doAdd(k, v);
  }

  public Object get(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    if(table[at] == null) {
      return null;
    }
    else if(!table[at].hasList) {
      return table[at].value;
    }
    else if(table[at].hasList) {
      for(CHashNode o : table[at].list) {
        if(o.key.equals(k)) {
          return o.value;
        }
      }
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return null;
  }
  
  public boolean contains(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    if(table[at] == null) {
      return false;
    }
    else if(!table[at].hasList) {
      return table[at].value.equals(k);
    }
    else if(table[at].hasList) {
      boolean flag = false;
      for(CHashNode o : table[at].list) {
        if(o.key.equals(k)) {
          flag = true;
        }
      }
      return flag;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return false;
  }
  
  public void remove(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    if(table[at] == null) {
      return;
    }
    else if(!table[at].hasList) {
      if(table[at].key.equals(k)){
        table[at] = null;
        load--;
        return;
      }
    }
    else if(table[at].hasList) {
      int idx = -1;
      for(int i=0; i < table[at].list.size(); i++) {
        if(table[at].list.get(i).key.equals(k)) {
          idx = i;
          break;
        }
      }
      if(idx >= 0) {
        table[at].list.remove(idx);
        load--;
        return;
      }
      return;
    }

    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return;
  }
  
}

public class CHashNode {
	
  public String key;
  public Object value;
  public LinkedList<CHashNode> list;
  public boolean hasList;

  public CHashNode(String k, Object v) {
    key = k;
    value = v;
    list = null;
    hasList = false;
  }

}
    `; // end chain hash

    this.codeHashLinear = `public class LinearOpenAddressingHashtable {

  private int size;
  private OAHashNode[] table;
  private OAHashNode deleted;
  private int load;
  private double threshold;

  public LinearOpenAddressingHashtable(int size, double threshold) {
    this.size = size;
    table = new OAHashNode[size];
    load = 0;
    this.threshold = threshold;
    deleted = new OAHashNode(null, null); // replaces deleted items so as not to break the probing process
  }
  
  // for testing purposes only
  public OAHashNode[] getEntireTable() {
    return table;
  }
  
  // for testing purposes only
  public int getSize() {
    return size;
  }
  
  // for testing purposes only
  public int getLoad() {
    return load;
  }
  
  public void add(String k, Object v) {
    doAdd(k, v);
    load++;
  }

  public void doAdd(String k, Object v) {
    // test load threshold, possibly resize
    double lf = (double) load / size;
    if(lf > threshold) {
      resize();
    }
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // step through table starting at hash, inserting if either a null node or a dummy node is found
    while(at<size) {
      if(table[at]==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else if(table[at].key==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else {
        // linear probing: always step by 1
        at++;
      }
    }
    // if we have gotten here, then we are past the end of the table and have failed to add the value, necessitating a resize() call
    System.out.println("Hit end of table!");
    resize();
    doAdd(k, v);
  }

  public void remove(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        table[at] = deleted;
        load--;
        return;
      }
      // otherwise, step ahead
      // linear probing: always step by 1
      at++;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return;
  }

  public Object get(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return null;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return table[at].value;
      }
      // otherwise, step ahead
      // linear probing: always step by 1
      at++;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return null;
  }

  public boolean contains(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return false;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return true;
      }
      // otherwise, step ahead
      // linear probing: always step by 1
      at++;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
		System.out.println("Hit end of table!");
    return false;
  }

  private void resize(){
    // resize should callout when it is called, just to see how often it happens
    System.out.println("LinearOpenAddressingHashtable is resizing from "+size+" to "+(size*2));

    size *= 2;
    OAHashNode[] oldTable = table;
    table = new OAHashNode[size];
    for(OAHashNode node : oldTable) {
      if(node != null) {
        doAdd(node.key, node.value);
      }
    }

  }

}

public class OAHashNode {
	
  public String key;
  public Object value;

  public OAHashNode(String k, Object v) {
    key = k;
    value = v;
  }

}
    `; // end linear hash

    this.codeHashPeriodic = `public class PeriodicIncreasingAmplitudeOpenAddressingHashtable {
	
  private int size;
  private OAHashNode[] table;
  private OAHashNode deleted;
  private int load;
  private double threshold;
  
  private int step;

  public PeriodicIncreasingAmplitudeOpenAddressingHashtable(int size, double threshold) {
    this.size = size;
    table = new OAHashNode[size];
    load = 0;
    this.threshold = threshold;
    deleted = new OAHashNode(null, null); // replaces deleted items so as not to break the probing process
  }
  
  // for testing purposes only
  public OAHashNode[] getEntireTable() {
    return table;
  }
  
  // for testing purposes only
  public int getSize() {
    return size;
  }
  
  // for testing purposes only
  public int getLoad() {
    return load;
  }
  
  public void add(String k, Object v) {
    doAdd(k, v);
    load++;
  }

  public void doAdd(String k, Object v) {
    // test load threshold, possibly resize
    double lf = (double) load / size;
    if(lf > threshold) {
      resize();
    }
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // step through table starting at hash, inserting if either a null node or a dummy node is found
    while(at<size && at >= 0) {
      if(table[at]==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else if(table[at].key==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else {
        // periodic probing: step forward, then flip step's sign and increase by 2
        at += step;
        step = 0 - (step+2);
      }
    }
    // if we have gotten here, then we are past the end of the table and have failed to add the value, necessitating a resize() call
    System.out.println("Hit end of table!");
    resize();
    doAdd(k, v);
  }

  public void remove(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size && at >= 0) {
      // fail if any probed node is null
      if(table[at] == null) {
        return;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        table[at] = deleted;
        load--;
        return;
      }
      // otherwise, step ahead
      // periodic probing: step forward, then flip step's sign and increase by 2
      at += step;
      step = 0 - (step+2);
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return;
  }

  public Object get(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size && at >= 0) {
      // fail if any probed node is null
      if(table[at] == null) {
        return null;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return table[at].value;
      }
      // otherwise, step ahead
      // periodic probing: step forward, then flip step's sign and increase by 2
      at += step;
      step = 0 - (step+2);
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return null;
  }

  public boolean contains(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size && at >= 0) {
      // fail if any probed node is null
      if(table[at] == null) {
        return false;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return true;
      }
      // otherwise, step ahead
      // periodic probing: step forward, then flip step's sign and increase by 2
      at += step;
      step = 0 - (step+2);
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
		System.out.println("Hit end of table!");
    return false;
  }

  private void resize(){
    // resize should callout when it is called, just to see how often it happens
    System.out.println("PeriodicIncreasingAmplitudeOpenAddressingHashtable is resizing from "+size+" to "+(size*2));

    size *= 2;
    OAHashNode[] oldTable = table;
    table = new OAHashNode[size];
    for(OAHashNode node : oldTable) {
      if(node != null) {
        doAdd(node.key, node.value);
      }
    }

  }

}

public class OAHashNode {
	
  public String key;
  public Object value;

  public OAHashNode(String k, Object v) {
    key = k;
    value = v;
  }

}
    `; // end periodic hash

    this.codeHashQuadratic = `public class QuadraticOpenAddressingHashtable {

  private int size;
  private OAHashNode[] table;
  private OAHashNode deleted;
  private int load;
  private double threshold;
  
  private int step;

  public QuadraticOpenAddressingHashtable(int size, double threshold) {
    this.size = size;
    table = new OAHashNode[size];
    load = 0;
    this.threshold = threshold;
    deleted = new OAHashNode(null, null); // replaces deleted items so as not to break the probing process
  }
  
  // for testing purposes only
  public OAHashNode[] getEntireTable() {
    return table;
  }
  
  // for testing purposes only
  public int getSize() {
    return size;
  }
  
  // for testing purposes only
  public int getLoad() {
    return load;
  }
  
  public void add(String k, Object v) {
    doAdd(k, v);
    load++;
  }

  public void doAdd(String k, Object v) {
    // test load threshold, possibly resize
    double lf = (double) load / size;
    if(lf > threshold) {
      resize();
    }
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // step through table starting at hash, inserting if either a null node or a dummy node is found
    while(at<size) {
      if(table[at]==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else if(table[at].key==null) {
        table[at] = new OAHashNode(k,v);
        return;
      } else {
        // quadratic probing: step forward, then double step to prepare for next iteration
        at += step;
        step *= 2;
      }
    }
    // if we have gotten here, then we are past the end of the table and have failed to add the value, necessitating a resize() call
    System.out.println("Hit end of table!");
    resize();
    doAdd(k, v);
  }

  public void remove(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        table[at] = deleted;
        load--;
        return;
      }
      // otherwise, step ahead
      // quadratic probing: step forward, then double step to prepare for next iteration
      at += step;
      step *= 2;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return;
  }

  public Object get(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return null;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return table[at].value;
      }
      // otherwise, step ahead
      // quadratic probing: step forward, then double step to prepare for next iteration
      at += step;
      step *= 2;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
    System.out.println("Hit end of table!");
    return null;
  }

  public boolean contains(String k) {
    // hash key for initial address
    int at = Hasher.hash(k, size);
    // initialize step as 1
    step = 1;
    // begin probing at hash
    while(at<size) {
      // fail if any probed node is null
      if(table[at] == null) {
        return false;
      }
      // test for "deleted" node's null key to avoid NullPointerException
      if(table[at].key == null) {
        // no-op
        assert true;
      }
      // if node is not null, compare keys for equality
      else if(table[at].key.equals(k)) {
        return true;
      }
      // otherwise, step ahead
      // quadratic probing: step forward, then double step to prepare for next iteration
      at += step;
      step *= 2;
    }
    // if we have gotten here, then we are past the end of the table and the key is not present
		System.out.println("Hit end of table!");
    return false;
  }

  private void resize(){
    // resize should callout when it is called, just to see how often it happens
    System.out.println("QuadraticOpenAddressingHashtable is resizing from "+size+" to "+(size*2));

    size *= 2;
    OAHashNode[] oldTable = table;
    table = new OAHashNode[size];
    for(OAHashNode node : oldTable) {
      if(node != null) {
        doAdd(node.key, node.value);
      }
    }

  }

}

public class OAHashNode {
	
  public String key;
  public Object value;

  public OAHashNode(String k, Object v) {
    key = k;
    value = v;
  }

}
    
    `;  // end quadratic hash

    this.codeHasher = `public class Hasher {
	
  // This is a reproduction of the Java String.hashCode(String s) function which also takes a modulo argument
  
  // any small prime number works here, ideally a Mersenne prime (can be expressed as 2^n - 1) as this can simplify the modulo operation

  private static int R = 31;
  
  public static int hash(String s, int l) {
    int output = 0;
      for(int i = 0; i < s.length(); i++) {
        output = (R*output + s.charAt(i)) % l;
      }
    return output;
  }

}
    `;  // end hasher

    this.codeHeap = `// adapted in part from code by Roman Gonzalez, github: roman

public class MinHeap {	
  
  MinHeapNode[] array;
  int size;
  
  public MinHeap(int maxSize) {
    this.size = 0;
    array = new MinHeapNode[maxSize]; 
  }
  
  public int size() {
    return size;
  }
  
  public MinHeapNode[] getArray() {
    return array;
  }
  
  public int parent(int i) {
    return (i-1)/2;
  }
  
  public int left(int i) {
    return (2*i)+1;
  }
  
  public int right(int i) {
    return (2*i)+2;
  }
  
  private void swap(int a, int b) {
    MinHeapNode temp = array[a];
    array[a] = array[b];
    array[b] = temp;
  }
  
  private void bubbleUp(int i) {
    // if at head of heap, bail
    if(i==0) {
      return;
    }
    // else if parent's priority is higher than child, swap and recur; otherwise, bail
    if(array[i].getPriority() < array[parent(i)].getPriority()) {
      swap(i, parent(i));
      bubbleUp(parent(i));
    }
  }
  
  private boolean isLeaf(int i) {
    return (2*i)+2 >= size;
  }
  
  private void sinkDown(int i) {
    // if node is leaf, bail
    if(isLeaf(i)) {
      return;
    }
    // find index of lowest-priority child
    int minIndex;
    if(right(i)>size) {
      minIndex = left(i);
    } else {
      if(array[left(i)].getPriority() < array[right(i)].getPriority()) {
        minIndex = left(i);
      } else {
        minIndex = right(i);
      }
    }
    // if parent is lower priority than least child, bail
    if(array[i].getPriority() < array[minIndex].getPriority()) {
      return;
    }
    // otherwise, swap downwards and recur
    swap(i, minIndex);
    sinkDown(minIndex);
  }
  
  // add()
  public void add(int p, Object o) {
    array[size] = new MinHeapNode(p, o);
    bubbleUp(size);
    size++;
  }
  
  // get() - not a very useful function, but included for comparison - essentially the same as contains()
  public Object get(Object o) {
    return doGet(0, o);
  }
  
  private Object doGet(int i, Object o) {
    if(isLeaf(i)) {return null;}
    if(array[i].getValue().equals(o)) {
      return array[i].getValue();
    }
    Object l = doGet(left(i), o);
    if(l != null) {return l;}
    Object r = doGet(right(i), o);
    if(r != null) {return r;}
    return null;
  }
  
  // contains()
  public boolean contains(Object o) {
    return doContains(0, o);
  }
  
  private boolean doContains(int i, Object o) {
    if(isLeaf(i)) {return false;}
    if(array[i].getValue().equals(o)) {
      return true;
    }
    boolean l = doContains(left(i), o);
    boolean r = doContains(right(i), o);
    return (l || r);
  }
  
  // remove()
  public Object remove() {
    size--;
    Object top = array[0].getValue();
    array[0] = array[size];
    array[size] = null;
    sinkDown(0);
    return top;
  }

}

public class MinHeapNode {
	
  int priority;
  Object value;

  public MinHeapNode(int p, Object o) {
    priority = p;
    value = o;
  }

  public Object getValue() {
    return value;
  }

  public void setValue(Object value) {
    this.value = value;
  }

  public int getPriority() {
    return priority;
  }

  public void setPriority(int priority) {
    this.priority = priority;
  }

}
    `;  // end minheap

    this.codeTrie = `public class Trie {

  TrieNode head;
  int size;

  public Trie() {
    head = new TrieNode(null);
    size = 0;
  }

  public TrieNode getHead() {
    return head;
  }

  public void setHead(TrieNode head) {
    this.head = head;
  }

  public int size() {
    return size;
  }

  // add()
  public void add(String s) {
    doAdd(head, s, 0);
    size++;
  }

  private void doAdd(TrieNode node, String s, int atIndex) {
    String c = String.valueOf(s.charAt(atIndex));
    if(atIndex == s.length()-1) {
      node.children().putIfAbsent(c, new TrieNode(s, node));
    } else if(node.has(c)) {
      doAdd(node.getChild(c), s, atIndex+1);
    } else {
      node.addChild(c);
      doAdd(node.getChild(c), s, atIndex+1);
    }
  }

  // get()
  public String get(String s) {
    TrieNode current = head;
    for(int i=0; i<s.length(); i++) {
      String c = String.valueOf(s.charAt(i));
      if(!current.has(c)) {
        return null;
      }
      current = current.getChild(c);
    }
    return current.getValue();
  }

  // contains()
  public boolean contains(String s) {
    TrieNode current = head;
    for(int i=0; i<s.length(); i++) {
      String c = String.valueOf(s.charAt(i));
      if(!current.has(c)) {
        return false;
      }
      current = current.getChild(c);
    }
    if(current.getValue().equals(s)) {
      return true;
    } else {
      return false;
    }
  }

  // remove()
  public void remove(String s) {
    TrieNode current = head;
    TrieNode parent = head;
    String c = null;
    for(int i=0; i<s.length(); i++) {
      c = String.valueOf(s.charAt(i));
      if(!current.has(c)) {
        return;
      }
      parent = current;
      current = current.getChild(c);
    }
    current.setValue(null);
    if(!current.hasValidChildren()) {
      parent.children().remove(c);
      parent.poof();
    }
    size--;
  }
}

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Objects;

public class TrieNode {

  TrieNode parent;
  Map<String, TrieNode> children;
  String value;

  public TrieNode(TrieNode parent) {
    value = null;
    this.parent = parent;
    children = new HashMap<String, TrieNode>();
  }

  public TrieNode(String value, TrieNode parent) {
    this.value = value;
    this.parent = parent;
    this.children = new HashMap<String, TrieNode>();
  }

  public Map<String, TrieNode> children() {
    return children;
  }

  public void addChild(String key) {
    children.put(key, new TrieNode(this));
  }

  public TrieNode getChild(String key) {
    return children.get(key);
  }

  public boolean has(String key) {
    return children.containsKey(key);
  }

  public String getValue() {
    return value;
  }

  public void setValue(String value) {
    this.value = value;
  }

  public boolean hasValidChildren(){
    if(value != null) {
      return true;
    }
    for(String c : children.keySet()) {
      if(children.get(c).hasValidChildren()) {
        return true;
      }
    }

    return false;
  }

  public int countNodes() {
    if(children.isEmpty()) {
      //			if(value != null) {
      return 1;
      //			}
    }
    int all = 1;
    for(String c : children.keySet()) {
      all += children.get(c).countNodes();
    }
    return all;
  }

  public void poof() {
    if(!this.hasValidChildren()) {
      if(parent != null) {
        for (Entry<String, TrieNode> entry : parent.children().entrySet()) {
          if (Objects.equals(this, entry.getValue())) {
            parent.children().remove(entry.getKey());
            parent.poof();
            break;
          }
        }
      }
    }
  }
}    
    `; // end trie

    this.codeBST = `public class BinarySearchTree {

  private BSTNode head;
  private int size;

  public BinarySearchTree () {
    head = null;
  }
  
  public BSTNode getHead() {
    return head;
  }

  public int size() {
    return size;
  }

  // add()
  public void add(int i, Object o) {
    size++;
    if(head == null) {
      head = new BSTNode(i, o);
      return;
    }
    doAdd(head, i, o);	
  }

  private void doAdd(BSTNode node, int i, Object o) {
    if(i < node.getNumber()) {
      if(node.getLeft() == null) {
        node.setLeft(new BSTNode(i, o));
      } else {
        doAdd(node.getLeft(), i, o);
      }
    } else {  // if compare == 0 i.e. strings are exact matches, default to right
      if(node.getRight() == null) {
        node.setRight(new BSTNode(i, o));
      } else {
        doAdd(node.getRight(), i, o);
      }
    }
  }

  // get()
  public Object get(int i) {
    BSTNode got = doGet(head, i);
    return got.getValue();
  }

  private BSTNode doGet(BSTNode node, int i) {
    if(node.getNumber() == i) {
      return node;
    }
    if(node.getLeft() != null) {
      BSTNode l = doGet(node.getLeft(), i);
      if(l != null) {return l;}	
    }
    if(node.getRight() != null) {
      BSTNode r = doGet(node.getRight(), i);
      if(r != null) {return r;}
    }
    return null;
  }

  // contains()
  public boolean contains(Object o) {
    return doContains(head, o);
  }
  
  private boolean doContains(BSTNode node, Object o) {
    if(node.getValue().equals(o)) {
      return true;
    }
    boolean l = false;
    boolean r = false;
    if(node.getLeft() != null) {
      l = doContains(node.getLeft(), o);
    }
    if(node.getRight() != null) {
      r = doContains(node.getRight(), o);
    }
    return (l || r);
  }
  
  // contains()
  public int keyOf(Object o) {
    return doKeyOf(head, o);
  }
  
  private int doKeyOf(BSTNode node, Object o) {
    if(node.getValue().equals(o)) {
      return node.getNumber();
    }
    int l = 0;
    int r = 0;
    if(node.getLeft() != null) {
      l = doKeyOf(node.getLeft(), o);
      if(l != -1) {
        return l;
      }
    }
    if(node.getRight() != null) {
      r = doKeyOf(node.getRight(), o);
      if(r != -1) {
        return r;
      }
    }
    return -1;
  }

  // remove() adapted from code found on algolist.com
  public boolean remove(int i) {
    if (head == null)
      return false;
    else {
      if (head.getNumber() == i) {
        BSTNode auxRoot = new BSTNode(i, null);
        auxRoot.setLeft(head);
        boolean result = head.remove(i, auxRoot);
        head = auxRoot.getLeft();
        if(result == true) {size--;}
        return result;
      } else {
        boolean removed = head.remove(i, null);
        if(removed == true) {size--;}
        return removed;
      }
    }     
  }
}

public class BSTNode {

  private int number;
  private Object value;
  private BSTNode left;
  private BSTNode right;

  public BSTNode(int i, Object o) {
    value = o;
    number = i;
    left = null;
    right = null;
  }

  public int getNumber() {
    return number;
  }

  public void setNumber(int number) {
    this.number = number;
  }

  public Object getValue() {
    return value;
  }

  public void setValue(Object value) {
    this.value = value;
  }

  public BSTNode getLeft() {
    return left;
  }

  public void setLeft(BSTNode left) {
    this.left = left;
  }

  public BSTNode getRight() {
    return right;
  }

  public void setRight(BSTNode right) {
    this.right = right;
  }

  // remove() and minNumber() adapted from code found on algolist.com

    public boolean remove(int i, BSTNode parent) {
      if (i < number) {
        if (left != null)
          return left.remove(i, this);
        else
          return false;
      } else if (i > number) {
        if (right != null)
          return right.remove(i, this);
        else
          return false;
      } else {
        if (left != null && right != null) {
          BSTNode nn = right.minNode();
          this.setNumber(nn.getNumber());
          this.setValue(nn.getValue());
          this.setLeft(nn.getLeft());
          this.setRight(nn.getRight());
          right.remove(i, this);
        } else if (parent.getLeft() == this) {
          parent.setLeft((left != null) ? left : right);
        } else if (parent.getRight() == this) {
          parent.setRight((left != null) ? left : right);
        }
        return true;
      }
  }

  public BSTNode minNode() {
    if (left == null)
      return this;
    else
      return left.minNode();
  }
}
    `;  // end BST

    this.codeAVL = `// adapted from code by Mayank Jaiswal found on geeksforgeeks.com, and from code by StackOverflow user "Trying"

public class AVLTree {

  private AVLNode head;
  private int size;

  public AVLTree() {
    head = null;
    size = 0;
  }

  public int size() {
    return size;
  }

  public AVLNode getHead() {
    return head;
  }

  public int height(AVLNode node) {
    if(node == null) {
      return 0;
    }
    return node.height;
  }

  public int max(int a, int b) {
    if(a>b) {return a;}
    else {return b;}
  }

  public int balance(AVLNode node) {
    if(node == null) {
      return 0;
    }
    return height(node.left) - height(node.right);
  }
  
  public AVLNode minMember(AVLNode node) {
    AVLNode current = node;
    while(current.left != null) {
      current = current.left;
    }
    return current;
  }

  public AVLNode rotateRight(AVLNode node) {
    AVLNode piv = node.left;
    AVLNode subtree = piv.right;
    piv.right = node;
    node.left = subtree;

    // update height information
    node.height = max(height(node.left), height(node.right)) + 1;
    piv.height = max(height(piv.left), height(piv.right)) + 1;

    return piv;	
  }

  public AVLNode rotateLeft(AVLNode node) {
    AVLNode piv = node.right;
    AVLNode subtree = piv.left;
    piv.left = node;
    node.right = subtree;

    // update height info
    node.height = max(height(node.left), height(node.right)) + 1;
    piv.height = max(height(piv.left), height(piv.right)) + 1;
    return piv;
  }



  // add()
  public void add(int n, Object o) {
    size++;
    head = doAdd(head, n, o); 
  }

  public AVLNode doAdd(AVLNode node, int n, Object o) {
    // add new node
    if(node == null) {
      node = new AVLNode(n, o);
      return node;
    } else {
      if(n < node.number) {
        node.left = doAdd(node.left, n, o);
      } else {
        node.right = doAdd(node.right, n, o);
      }
    }

    // height update
    node.height = max(height(node.left), height(node.right))+1;

    // check balance and rotate
    int bal = balance(node);
    if(bal < -1) {
      if(balance(node.right) > 0) {
        node.right = rotateRight(node.right);
        return rotateLeft(node);
      } else {
        return rotateLeft(node);
      }
    } else if (bal > 1) {
      if(balance(node.left) < 0) {
        node.left = rotateLeft(node.left);
        return rotateRight(node);
      } else {
        return rotateRight(node);
      }
    }
    return node;
  }

  // get()
  public Object get(int n) {
    AVLNode got = doGet(head, n);
    return got.value;
  }

  private AVLNode doGet(AVLNode node, int n) {
    if(node.number == n) {
      return node;
    }
    if(node.left != null) {
      AVLNode l = doGet(node.left, n);
      if(l != null) {return l;}	
    }
    if(node.right != null) {
      AVLNode r = doGet(node.right, n);
      if(r != null) {return r;}
    }
    return null;
  }

  // contains()
  public boolean contains(Object o) {
    return doContains(head, o);
  }
  
  private boolean doContains(AVLNode node, Object o) {
    if(node.value.equals(o)) {
      return true;
    }
    boolean l = false;
    boolean r = false;
    if(node.left != null) {
      l = doContains(node.left, o);
    }
    if(node.right != null) {
      r = doContains(node.right, o);
    }
    return (l || r);
  }

  // remove()
  public void remove(int n) {
    head = doRemove(head, n);
    size--;
  }
  
  public AVLNode doRemove(AVLNode node, int n) {
    // if this node is null, bail
    if(node == null) {
      return node;
    }
    // if this is not the node to remove, move towards that node
    if(n < node.number) {
      node.left = doRemove(node.left, n);
    } else if(n > node.number) {
      node.right = doRemove(node.right, n);
    } else {
      // this is the node to remove!
      // if both children exist, swap with closest-value number and remove that node 
      if(node.left != null && node.right != null) {
        AVLNode temp = minMember(node.right);  // vvvvv this doesn't look right vvvvv
        node.number = temp.number;
        node.value = temp.value;
        node.right = doRemove(node.right, temp.number);
      } else {
        // only one child exists, move that child into this node's place
        if(node.left != null) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
    return node;
  }



  public void preOrder(AVLNode node) {
    if (node != null) {
      System.out.print(node.number + ", ");
      preOrder(node.left);
      preOrder(node.right);
    }
  }

  public int countNodes(AVLNode node) {
    if (node == null) {
      return 0;
    }
    int l = countNodes(node.left);
    int r = countNodes(node.right);
    return 1 + l + r;
  }

}

public class AVLNode {
	
  public int number;
  public Object value;
  public int height;
  public AVLNode left;
  public AVLNode right;

  public AVLNode(int number, Object value) {
    this.number = number;
    this.value = value;
    height = 1;
    left = null;
    right = null;
  }

}
    `;  // end AVL

    this.codeRedBlack = `// adapted from code by Jatin Thakur on codebytes.in

public class RedBlackTree {

  private final int RED = 0;
  private final int BLACK = 1;

  private final RBNode nil = new RBNode(-1, null);

  private RBNode head = nil;
  private int size = 0;

  private class RBNode {

    public int number;
    public Object value;
    public int color = BLACK;
    public RBNode left = nil;
    public RBNode right = nil;
    public RBNode parent = nil;

    public RBNode (int number, Object value) {
      this.number = number;
      this.value = value;
    }

  }

  public RedBlackTree() {}

  public RBNode getHead() {
    return head;
  }

  public int size() {
    return size;
  }

  private void rotateRight(RBNode node) {
    if (node.parent != nil) {
      if (node == node.parent.left) {
        node.parent.left = node.left;
      } else {
        node.parent.right = node.left;
      }

      node.left.parent = node.parent;
      node.parent = node.left;
      if (node.left.right != nil) {
        node.left.right.parent = node;
      }
      node.left = node.left.right;
      node.parent.right = node;
    } else {//Need to rotate head
      RBNode left = head.left;
      head.left = head.left.right;
      left.right.parent = head;
      head.parent = left;
      left.right = head;
      left.parent = nil;
      head = left;
    }
  }

  private void rotateLeft(RBNode node) {
    if (node.parent != nil) {
      if (node == node.parent.left) {
        node.parent.left = node.right;
      } else {
        node.parent.right = node.right;
      }
      node.right.parent = node.parent;
      node.parent = node.right;
      if (node.right.left != nil) {
        node.right.left.parent = node;
      }
      node.right = node.right.left;
      node.parent.left = node;
    } else {//Need to rotate head
      RBNode right = head.right;
      head.right = right.left;
      right.left.parent = head;
      head.parent = right;
      right.left = head;
      right.parent = nil;
      head = right;
    }

  }

  private void fixTree(RBNode node) {
    // we know node is red, so while its parent is also red, we need to recolour and/or rotate
    while(node.parent.color == RED) {
      RBNode uncle = nil;
      // if node's parent is a left child
      if(node.parent == node.parent.parent.left) {
        uncle = node.parent.parent.right;
        // if node's parent & uncle are both red, recolor them black and their parent red, then skip to next loop iteration
        if(uncle != nil && uncle.color == RED) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
          continue;
        }
        // if our new node is towards the middle of the tree (right child of left parent), double-rotate
        if(node == node.parent.right) {
          node = node.parent;
          rotateLeft(node);
        }
        // once here, recolor parent&grandparent and then rotate grandparent
        node.parent.color = BLACK;
        node.parent.parent.color = RED;
        rotateRight(node.parent.parent);
      } else {
        // node's parent is a right child
        uncle = node.parent.parent.left;
        // if node's parent & uncle are both red, recolor them black and their parent red, then skip to next loop iteration
        if(uncle != nil && uncle.color == RED) {
          node.parent.color = BLACK;
          uncle.color = BLACK;
          node.parent.parent.color = RED;
          node = node.parent.parent;
          continue;
        }
        // if our new node is towards the middle of the tree (left child of right parent), double-rotate
        if(node == node.parent.left) {
          node = node.parent;
          rotateRight(node);
        }
        // once here, recolor parent&grandparent and then rotate grandparent
        node.parent.color = BLACK;
        node.parent.parent.color = RED;
        rotateLeft(node.parent.parent);
      }
    }
    head.color = BLACK;
  }

  // add()
  public void add(int n, Object o) {
    RBNode newNode = new RBNode(n, o);
    RBNode temp = head;
    // if tree is empty
    if(head == nil) {
      head = newNode;
      head.color = BLACK;
      head.parent = nil;
    } else {
      // color this node red and traverse until we find place for it
      newNode.color = RED;
      while(true) {
        if(n < temp.number) {
          // look left then add or move
          if(temp.left == nil) {
            temp.left = newNode;
            newNode.parent = temp;
            break;
          } else {
            temp = temp.left;
          }
        } else if(n > temp.number) {
          // look right then add or move
          if(temp.right == nil) {
            temp.right = newNode;
            newNode.parent = temp;
            break;
          } else {
            temp = temp.right;
          }
        }
      }
      fixTree(newNode);
    }
    size++;
  }

  // get()
  public Object get(int n) {
    RBNode got = doGet(head, n);
    return got.value;
  }

  private RBNode doGet(RBNode node, int n) {
    if(node.number == n) {
      return node;
    }
    if(node.left != null) {
      RBNode l = doGet(node.left, n);
      if(l != null) {return l;}	
    }
    if(node.right != null) {
      RBNode r = doGet(node.right, n);
      if(r != null) {return r;}
    }
    return null;
  }

  // contains()
  public boolean contains(Object o) {
    return doContains(head, o);
  }
  
  private boolean doContains(RBNode node, Object o) {
    if(node == nil) {
      return false;
    }
    if(node.value.equals(o)) {
      return true;
    }
    boolean l = false;
    boolean r = false;
    if(node.left != null) {
      l = doContains(node.left, o);
    }
    if(node.right != null) {
      r = doContains(node.right, o);
    }
    return (l || r);
  }

  // remove()
  public boolean remove(RBNode z){
    if((z = findNode(z.number, head))==nil) {return false;}
    RBNode x;
    RBNode y = z;
    int y_original_color = y.color;

    if(z.left == nil){
      x = z.right;  
      transplant(z, z.right);  
    }else if(z.right == nil){
      x = z.left;
      transplant(z, z.left); 
    }else{
      y = treeMinimum(z.right);
      y_original_color = y.color;
      x = y.right;
      if(y.parent == z)
        x.parent = y;
      else{
        transplant(y, y.right);
        y.right = z.right;
        y.right.parent = y;
      }
      transplant(z, y);
      y.left = z.left;
      y.left.parent = y;
      y.color = z.color; 
    }
    if(y_original_color==BLACK)
      repair(x);
    size--;
    return true;
  }

  // transplant code does not automatically reassign child pointers
  private void transplant(RBNode target, RBNode with){ 
    if(target.parent == nil){
      head = with;
    }else if(target == target.parent.left){
      target.parent.left = with;
    }else
      target.parent.right = with;
    with.parent = target.parent;
  }

  public RBNode findNode(int findNode, RBNode node) {   // changed from node as arg, to number as arg
    if (head == nil) {
      return null;
    }

    if (findNode < node.number) {
      if (node.left != nil) {
        return findNode(findNode, node.left);
      }
    } else if (findNode > node.number) {
      if (node.right != nil) {
        return findNode(findNode, node.right);
      }
    } else if (findNode == node.number) {
      return node;
    }
    return null;
  }

  RBNode treeMinimum(RBNode subTreeRoot){
    while(subTreeRoot.left!=nil){
      subTreeRoot = subTreeRoot.left;
    }
    return subTreeRoot;
  }

  private void repair(RBNode x){
    while(x!=head && x.color == BLACK){ 
      if(x == x.parent.left){
        RBNode w = x.parent.right;
        if(w.color == RED){
          w.color = BLACK;
          x.parent.color = RED;
          rotateLeft(x.parent);
          w = x.parent.right;
        }
        if(w.left.color == BLACK && w.right.color == BLACK){
          w.color = RED;
          x = x.parent;
          continue;
        }
        else if(w.right.color == BLACK){
          w.left.color = BLACK;
          w.color = RED;
          rotateRight(w);
          w = x.parent.right;
        }
        if(w.right.color == RED){
          w.color = x.parent.color;
          x.parent.color = BLACK;
          w.right.color = BLACK;
          rotateLeft(x.parent);
          x = head;
        }
      }else{
        RBNode w = x.parent.left;
        if(w.color == RED){
          w.color = BLACK;
          x.parent.color = RED;
          rotateRight(x.parent);
          w = x.parent.left;
        }
        if(w.right.color == BLACK && w.left.color == BLACK){
          w.color = RED;
          x = x.parent;
          continue;
        }
        else if(w.left.color == BLACK){
          w.right.color = BLACK;
          w.color = RED;
          rotateLeft(w);
          w = x.parent.left;
        }
        if(w.left.color == RED){
          w.color = x.parent.color;
          x.parent.color = BLACK;
          w.left.color = BLACK;
          rotateRight(x.parent);
          x = head;
        }
      }
    }
    x.color = BLACK; 
  }
  
  public int countNodes(RBNode node) {
    if (node == nil) {
      return 0;
    }
    int l = countNodes(node.left);
    int r = countNodes(node.right);
    return 1 + l + r;
  }

}    
    `;  // end RBTree





  } // end constructor

  ngOnInit() {
  }

  
  
  
  
  
  

}
